'use client';
import { useEffect, useRef } from 'react';

export default function FloatingGem({ color = '#D4760F', size = 110 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Desktop only — skip on mobile to save GPU budget
    if (window.matchMedia('(max-width: 1023px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mounted = true;
    let disposeAll = () => {};

    const init = async () => {
      const THREE = await import('three');
      if (!mounted || !canvasRef.current) return;

      const canvas = canvasRef.current;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(size, size);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
      camera.position.z = 2.8;

      // Octahedron wireframe edges
      const geo = new THREE.OctahedronGeometry(0.9, 0);
      const edges = new THREE.EdgesGeometry(geo);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.85,
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      scene.add(wireframe);

      // Subtle solid fill
      const fillMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.07,
        side: THREE.FrontSide,
      });
      const solid = new THREE.Mesh(geo.clone(), fillMat);
      scene.add(solid);

      let raf;
      let isVisible = true;
      const io = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; });
      io.observe(canvas);

      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!isVisible) return;
        wireframe.rotation.y += 0.009;
        wireframe.rotation.x += 0.004;
        solid.rotation.y = wireframe.rotation.y;
        solid.rotation.x = wireframe.rotation.x;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(tick);

      disposeAll = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        geo.dispose();
        edges.dispose();
        lineMat.dispose();
        fillMat.dispose();
        renderer.dispose();
      };
    };

    init();
    return () => {
      mounted = false;
      disposeAll();
    };
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      width={size}
      height={size}
      className="pointer-events-none"
      style={{ width: size, height: size }}
    />
  );
}
