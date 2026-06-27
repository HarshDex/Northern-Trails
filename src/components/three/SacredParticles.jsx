'use client';
import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 aPos;
attribute float aSize;
attribute float aPhase;
attribute float aSpeed;
attribute float aDepth;
uniform float uTime;
uniform float uScroll;
varying float vAlpha;
varying vec3 vColor;

void main() {
  float t = uTime;

  // Global meditation breathing
  float breath = 0.92 + 0.08 * sin(t * 0.15);

  // Float upward, depth-based speed
  float y = aPos.y + t * aSpeed * (0.5 + aDepth * 0.5);
  y = mod(y + 1.15, 2.3) - 1.15;

  // Scroll parallax — near particles react more
  y -= uScroll * 0.00004 * (0.2 + aDepth * 0.8);
  y = mod(y + 1.15, 2.3) - 1.15;

  // Organic horizontal drift: two incommensurate sine waves
  float x = aPos.x
    + sin(t * 0.35 + aPhase * 6.2832) * 0.018
    + sin(t * 0.19 + aPhase * 3.1416) * 0.009;

  // Meditative twinkle
  float pulse = sin(t * (0.4 + aPhase * 0.8) + aPhase * 6.2832);
  float twinkle = 0.15 + 0.85 * pulse * pulse * breath;
  vAlpha = twinkle * (0.35 + aDepth * 0.65);

  // Deep saffron (far) to pale gold (near)
  float hue = smoothstep(0.0, 1.0, aDepth * 0.6 + 0.4 * sin(aPhase * 9.42));
  vColor = mix(vec3(0.83, 0.46, 0.06), vec3(0.96, 0.82, 0.42), hue);

  gl_Position = vec4(x, y, 0.0, 1.0);
  gl_PointSize = aSize * (0.6 + 0.4 * twinkle);
}
`;

const FRAG = `
precision mediump float;
varying float vAlpha;
varying vec3 vColor;

void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if (r2 > 1.0) discard;

  // Core glow + sacred outer halo
  float core = exp(-r2 * 3.0);
  float halo = exp(-r2 * 1.0) * 0.2;
  float a = (core + halo) * vAlpha * 0.5;

  gl_FragColor = vec4(vColor * a, a);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : (gl.deleteShader(s), null);
}

function link(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : (gl.deleteProgram(p), null);
}

export default function SacredParticles() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    if (!canvas) return;

    const mobile = window.innerWidth < 768;
    const COUNT = mobile ? 50 : 120;
    const DPR = Math.min(window.devicePixelRatio, 1.5);

    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      powerPreference: 'low-power',
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = link(gl, vs, fs);
    if (!prog) return;

    const attr = (n) => gl.getAttribLocation(prog, n);
    const loc = { aPos: attr('aPos'), aSize: attr('aSize'), aPhase: attr('aPhase'), aSpeed: attr('aSpeed'), aDepth: attr('aDepth') };
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uScroll = gl.getUniformLocation(prog, 'uScroll');

    const pos = new Float32Array(COUNT * 2);
    const size = new Float32Array(COUNT);
    const phase = new Float32Array(COUNT);
    const speed = new Float32Array(COUNT);
    const depth = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      pos[i * 2] = (Math.random() - 0.5) * 2.2;
      pos[i * 2 + 1] = (Math.random() - 0.5) * 2.2;
      phase[i] = Math.random();
      speed[i] = 0.012 + Math.random() * 0.03;
      const r = Math.random();
      if (r < 0.60) {
        depth[i] = 0.1 + Math.random() * 0.25;
        size[i] = (1.5 + Math.random() * 2) * DPR;
      } else if (r < 0.90) {
        depth[i] = 0.35 + Math.random() * 0.3;
        size[i] = (3.5 + Math.random() * 3) * DPR;
      } else {
        depth[i] = 0.7 + Math.random() * 0.3;
        size[i] = (7 + Math.random() * 5) * DPR;
      }
    }

    const makeBuf = (data) => {
      const b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      return b;
    };
    const bufs = { pos: makeBuf(pos), size: makeBuf(size), phase: makeBuf(phase), speed: makeBuf(speed), depth: makeBuf(depth) };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.disable(gl.DEPTH_TEST);

    let raf, scrollY = 0, lastT = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    const bind = (name, sz, buf) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(loc[name]);
      gl.vertexAttribPointer(loc[name], sz, gl.FLOAT, false, 0, 0);
    };

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (mobile && t - lastT < 34) return;
      lastT = t;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.uniform1f(uTime, t * 0.001);
      gl.uniform1f(uScroll, scrollY);

      bind('aPos', 2, bufs.pos);
      bind('aSize', 1, bufs.size);
      bind('aPhase', 1, bufs.phase);
      bind('aSpeed', 1, bufs.speed);
      bind('aDepth', 1, bufs.depth);
      gl.drawArrays(gl.POINTS, 0, COUNT);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      Object.values(bufs).forEach((b) => gl.deleteBuffer(b));
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 30, mixBlendMode: 'screen' }}
    />
  );
}
