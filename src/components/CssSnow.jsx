/* Pure CSS snow — no WebGL, no animation loop. 20 statically-positioned particles. */
const FLAKES = [
  { left: '4%',  dur: '12s', del: '0s',   size: 4, op: 0.55 },
  { left: '11%', dur: '10s', del: '-3s',  size: 3, op: 0.45 },
  { left: '18%', dur: '15s', del: '-8s',  size: 5, op: 0.38 },
  { left: '26%', dur: '11s', del: '-2s',  size: 3, op: 0.6  },
  { left: '33%', dur: '13s', del: '-6s',  size: 4, op: 0.48 },
  { left: '41%', dur: '9s',  del: '-1s',  size: 3, op: 0.42 },
  { left: '49%', dur: '16s', del: '-9s',  size: 5, op: 0.35 },
  { left: '57%', dur: '11s', del: '-4s',  size: 3, op: 0.55 },
  { left: '64%', dur: '14s', del: '-7s',  size: 4, op: 0.4  },
  { left: '72%', dur: '10s', del: '-2s',  size: 3, op: 0.5  },
  { left: '79%', dur: '13s', del: '-5s',  size: 5, op: 0.44 },
  { left: '87%', dur: '12s', del: '-10s', size: 3, op: 0.35 },
  { left: '8%',  dur: '17s', del: '-3s',  size: 4, op: 0.48 },
  { left: '22%', dur: '10s', del: '-7s',  size: 3, op: 0.4  },
  { left: '37%', dur: '14s', del: '-1s',  size: 4, op: 0.52 },
  { left: '53%', dur: '11s', del: '-8s',  size: 3, op: 0.38 },
  { left: '68%', dur: '15s', del: '-4s',  size: 4, op: 0.44 },
  { left: '84%', dur: '9s',  del: '-6s',  size: 3, op: 0.5  },
  { left: '1%',  dur: '13s', del: '-2s',  size: 4, op: 0.35 },
  { left: '95%', dur: '14s', del: '-9s',  size: 3, op: 0.42 },
];

export default function CssSnow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {FLAKES.map((f, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '-10px',
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            borderRadius: '50%',
            background: 'white',
            opacity: f.op,
            animation: `snow-fall ${f.dur} linear ${f.del} infinite`,
          }}
        />
      ))}
    </div>
  );
}
