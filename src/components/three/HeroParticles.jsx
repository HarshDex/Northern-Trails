'use client';
import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mounted = true;
    let disposeAll = () => {};

    const init = async () => {
      const THREE = await import('three');
      if (!mounted || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const COUNT = isMobile ? 55 : 170;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(65, canvas.offsetWidth / canvas.offsetHeight, 0.1, 50);
      camera.position.z = 4;

      // Positions and per-particle upward velocities
      const positions = new Float32Array(COUNT * 3);
      const velocities = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 14;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
        velocities[i]        = 0.003 + Math.random() * 0.006;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        size: isMobile ? 0.014 : 0.018,
        color: new THREE.Color('#E8A040'),
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const posArr = geo.attributes.position.array;
      let raf;
      let isVisible = true;
      let lastTime = 0;

      const io = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; });
      io.observe(canvas);

      const tick = (time) => {
        raf = requestAnimationFrame(tick);
        if (!isVisible) return;
        // Cap to ~30 fps on mobile
        if (isMobile && time - lastTime < 34) return;
        lastTime = time;

        for (let i = 0; i < COUNT; i++) {
          posArr[i * 3 + 1] += velocities[i];
          if (posArr[i * 3 + 1] > 5) {
            posArr[i * 3]     = (Math.random() - 0.5) * 14;
            posArr[i * 3 + 1] = -5;
          }
        }
        geo.attributes.position.needsUpdate = true;
        points.rotation.y += 0.00015;
        renderer.render(scene, camera);
      };

      raf = requestAnimationFrame(tick);

      const onResize = () => {
        if (!canvasRef.current) return;
        const w = canvasRef.current.offsetWidth;
        const h = canvasRef.current.offsetHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize, { passive: true });

      disposeAll = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener('resize', onResize);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      };
    };

    init();
    return () => {
      mounted = false;
      disposeAll();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ mixBlendMode: 'screen', zIndex: 3 }}
    />
  );
}
