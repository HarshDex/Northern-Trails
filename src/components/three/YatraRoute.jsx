'use client';
import { useEffect, useRef, useState } from 'react';

// ── Custom mountain SVG paths (user-supplied, original viewBox 0 0 3003 3003)
// Scaled/positioned with transform="translate(-21,-121) scale(0.221)" inside the 840×600 map SVG
// → mountains occupy map x ≈ 40–600, y ≈ 63–300 (peaks at y≈63, baseline at y≈300)
const MTN_A =
  'M 475.730469 1608.261719 C 475.730469 1608.261719 509.644531 1620.289062 577.421875 1602.238281 ' +
  'C 645.207031 1584.199219 683.105469 1466.621094 701.042969 1434.71875 ' +
  'C 718.972656 1402.789062 932.355469 1237.28125 932.355469 1237.28125 ' +
  'L 1061.960938 1438.710938 ' +
  'C 1065.929688 1412.78125 1219.5 1235.289062 1277.320312 1187.429688 ' +
  'C 1335.140625 1139.609375 1379 1057.789062 1375.019531 1011.949219 ' +
  'C 1371.050781 966.089844 1496.660156 830.5 1502.640625 830.5 ' +
  'C 1508.621094 830.5 1552.5 930.210938 1560.449219 954.179688 ' +
  'C 1568.429688 978.128906 1584.539062 996.058594 1624.269531 1021.960938 ' +
  'C 1664.019531 1047.871094 1809.71875 1251.320312 1809.71875 1251.320312 ' +
  'L 1967.238281 1129.679688 ' +
  'C 1987.191406 1265.289062 2228.460938 1514.53125 2266.339844 1536.5 ' +
  'C 2304.21875 1558.46875 2308.210938 1536.5 2332.121094 1582.351562 ' +
  'C 2356.050781 1628.199219 2808.730469 1903.390625 2808.730469 1903.390625 ' +
  'L 278.332031 1903.410156 Z ' +
  'M 1869.519531 1823.601562 C 1869.519531 1823.601562 1911.398438 1660.070312 1975.230469 1692 ' +
  'C 2024.789062 1716.820312 2033.421875 1759.53125 2034.808594 1777.421875 ' +
  'C 2037.820312 1772.191406 2048.941406 1766.671875 2082.929688 1767.769531 ' +
  'C 2144.730469 1769.789062 2188.589844 1793.71875 2188.589844 1751.839844 ' +
  'C 2188.421875 1728.480469 2189.738281 1705.199219 2192.570312 1681.988281 ' +
  'C 2192.570312 1681.988281 2308.210938 1761.730469 2401.929688 1751.769531 ' +
  'C 2401.929688 1751.769531 1983.179688 1558.328125 1951.28125 1265.191406 ' +
  'C 1951.28125 1265.191406 1803.71875 1366.878906 1805.738281 1416.761719 ' +
  'C 1807.75 1466.601562 1839.609375 1512.460938 1787.691406 1530.429688 ' +
  'C 1735.769531 1548.371094 1703.929688 1570.320312 1703.929688 1570.320312 ' +
  'C 1703.929688 1570.320312 1777.730469 1604.230469 1751.808594 1666.019531 ' +
  'C 1725.871094 1727.820312 1642.148438 1795.660156 1642.148438 1795.660156 ' +
  'C 1642.148438 1795.660156 1865.550781 1743.871094 1869.519531 1823.601562 Z ' +
  'M 1510.609375 1462.539062 C 1526.558594 1454.578125 1516.628906 1444.488281 1520.570312 1404.75 ' +
  'C 1524.519531 1365 1548.5 1398.730469 1584.378906 1426.648438 ' +
  'C 1620.269531 1454.570312 1745.898438 1265.140625 1745.898438 1265.140625 ' +
  'L 1504.609375 991.878906 ' +
  'C 1504.609375 991.878906 1516.660156 1043.75 1510.648438 1089.640625 ' +
  'C 1504.609375 1135.5 1436.878906 1127.539062 1436.878906 1127.539062 ' +
  'C 1436.878906 1127.539062 1464.789062 1215.28125 1438.871094 1265.140625 ' +
  'C 1421.859375 1297.820312 1380.140625 1303.03125 1353.359375 1302.738281 ' +
  'C 1345.371094 1301.601562 1337.359375 1301.03125 1329.289062 1300.988281 ' +
  'C 1337.289062 1302.128906 1345.289062 1302.710938 1353.359375 1302.738281 ' +
  'C 1383.449219 1306.871094 1432.640625 1320.808594 1444.859375 1366.828125 ' +
  'C 1457.691406 1415.398438 1384.679688 1509.960938 1342.140625 1559.761719 ' +
  'C 1330.96875 1569.179688 1321.339844 1579.980469 1313.25 1592.148438 ' +
  'C 1313.25 1592.148438 1325.289062 1579.460938 1342.140625 1559.761719 ' +
  'C 1398.578125 1509.960938 1497.449219 1469.289062 1510.609375 1462.648438 Z ' +
  'M 832.660156 1673.949219 ' +
  'C 884.496094 1614.089844 986.082031 1608.140625 1030.070312 1544.320312 ' +
  'C 1074.058594 1480.511719 938.34375 1348.738281 938.34375 1348.738281 ' +
  'C 904.429688 1346.75 924.390625 1448.460938 908.257812 1544.320312 ' +
  'C 892.136719 1640.191406 694.941406 1739.898438 694.941406 1739.898438 ' +
  'C 694.941406 1739.898438 780.792969 1733.898438 832.660156 1674.058594 Z';

const MTN_B =
  'M 475.730469 1608.261719 C 475.730469 1608.261719 486.808594 1612.191406 508.953125 1612.191406 ' +
  'C 525.554688 1612.191406 548.378906 1609.980469 577.421875 1602.238281 ' +
  'C 631.765625 1587.769531 666.902344 1509.328125 687.945312 1462.359375 ' +
  'C 693.148438 1450.738281 697.488281 1441.050781 701.042969 1434.71875 ' +
  'C 718.972656 1402.789062 932.359375 1237.28125 932.355469 1237.28125 ' +
  'L 1061.960938 1438.710938 ' +
  'C 1065.929688 1412.78125 1219.5 1235.289062 1277.320312 1187.429688 ' +
  'C 1335.140625 1139.609375 1379 1057.789062 1375.019531 1011.949219 ' +
  'C 1371.058594 966.191406 1496.140625 831.070312 1502.609375 830.5 ' +
  'C 1508.621094 830.5 1552.5 930.210938 1560.449219 954.179688 ' +
  'C 1568.429688 978.128906 1584.539062 996.058594 1624.269531 1021.960938 ' +
  'C 1664.019531 1047.871094 1809.71875 1251.320312 1809.71875 1251.320312 ' +
  'L 1967.238281 1129.679688 ' +
  'C 1987.191406 1265.289062 2228.460938 1514.53125 2266.339844 1536.5 ' +
  'C 2280.089844 1544.46875 2289.378906 1546.660156 2296.761719 1548.398438 ' +
  'C 2301.648438 1549.550781 2305.71875 1550.511719 2309.691406 1552.808594 ' +
  'C 2316.269531 1556.628906 2322.628906 1564.140625 2332.121094 1582.351562 ' +
  'C 2356.050781 1628.199219 2808.730469 1903.390625 2808.730469 1903.390625 ' +
  'L 278.332031 1903.410156 Z ' +
  'M 1869.519531 1823.601562 C 1867.789062 1788.921875 1824.550781 1779.121094 1776.230469 1779.121094 ' +
  'C 1713.46875 1779.121094 1642.148438 1795.660156 1642.148438 1795.660156 ' +
  'C 1642.148438 1795.660156 1725.871094 1727.820312 1751.808594 1666.019531 ' +
  'C 1757.320312 1594.851562 1703.929688 1570.320312 1703.929688 1570.320312 ' +
  'C 1703.929688 1570.320312 1735.769531 1548.371094 1787.691406 1530.429688 ' +
  'C 1817.921875 1507.558594 1805.71875 1415.730469 1805.71875 1415.730469 ' +
  'C 1805.71875 1365.5 1951.28125 1265.191406 1951.28125 1265.191406 ' +
  'C 1983.179688 1558.328125 2401.929688 1751.769531 2401.929688 1751.769531 ' +
  'C 2192.570312 1681.988281 2188.589844 1751.839844 2188.589844 1751.839844 ' +
  'C 2187.949219 1772.328125 2160.910156 1776.359375 2082.929688 1767.769531 ' +
  'C 2048.941406 1766.671875 2034.808594 1777.421875 2034.808594 1777.421875 ' +
  'C 2033.421875 1759.53125 2024.789062 1716.820312 1975.230469 1692 ' +
  'C 1904.28125 1687.859375 1869.519531 1823.601562 1869.519531 1823.601562 Z ' +
  'M 1510.609375 1462.539062 L 1510.609375 1462.648438 ' +
  'C 1390.480469 1517.101562 1342.140625 1559.761719 1313.25 1592.148438 ' +
  'C 1321.339844 1579.980469 1330.96875 1569.179688 1342.140625 1559.761719 ' +
  'C 1384.679688 1509.960938 1457.691406 1415.398438 1444.859375 1366.828125 ' +
  'C 1432.640625 1320.808594 1353.359375 1302.738281 1329.289062 1300.988281 ' +
  'C 1437.28125 1302.128906 1449.890625 1210.289062 1436.878906 1127.539062 ' +
  'C 1436.878906 1127.539062 1512.328125 1061.898438 1504.609375 991.878906 ' +
  'L 1745.898438 1265.140625 ' +
  'C 1745.898438 1265.140625 1584.378906 1426.648438 1520.570312 1404.75 ' +
  'C 1519.121094 1419.421875 1520.671875 1457.519531 1510.609375 1462.539062 Z ' +
  'M 832.660156 1673.949219 L 832.660156 1674.058594 ' +
  'C 780.792969 1733.898438 694.941406 1739.898438 694.941406 1739.898438 ' +
  'C 892.148438 1640.109375 908.257812 1544.320312 914.21875 1488.839844 ' +
  'C 915.683594 1451.921875 916.015625 1435.238281 917.234375 1396.511719 ' +
  'C 918.980469 1366.851562 938.34375 1348.738281 938.34375 1348.738281 ' +
  'C 1074.058594 1480.511719 1030.070312 1544.320312 1022.269531 1554.378906 ' +
  'C 998.851562 1581.429688 893.367188 1629.140625 832.660156 1673.949219 Z';

// Full round-trip stops — car animates the OUTWARD journey
const STOPS = [
  {
    label: 'Kathgodam', sub: 'Haldwani · Start', t: 0.00,
    cx: 682, cy: 524, type: 'city',
    lx: 696, ly: 524, anchor: 'start',
  },
  {
    label: 'Kainchi Dham', sub: 'Neem Karoli Baba Ashram', t: 0.11,
    cx: 604, cy: 466, type: 'temple',
    lx: 618, ly: 466, anchor: 'start',
  },
  {
    label: 'Golu Devta Temple', sub: 'Champawat', t: 0.21,
    cx: 554, cy: 422, type: 'temple',
    lx: 568, ly: 422, anchor: 'start',
  },
  {
    label: 'Pithoragarh', sub: '1,814 M · Hill Queen', t: 0.32,
    cx: 500, cy: 376, type: 'city',
    lx: 514, ly: 376, anchor: 'start',
  },
  {
    label: 'Dharchula', sub: 'Nepal Border · 915 M', t: 0.47,
    cx: 338, cy: 356, type: 'city',
    lx: 324, ly: 356, anchor: 'end',
  },
  {
    label: 'Tawaghat', sub: 'Dhauliganga Confluence', t: 0.57,
    cx: 298, cy: 310, type: 'stop',
    lx: 284, ly: 310, anchor: 'end',
  },
  {
    label: 'Gunji · Nabi', sub: 'Base Camp · 3,350 M', t: 0.68,
    cx: 256, cy: 240, type: 'camp',
    lx: 242, ly: 240, anchor: 'end',
  },
  {
    label: 'Adi Kailash', sub: '5,945 M · Chota Kailash', t: 1.00,
    cx: 336, cy: 160, type: 'city',
    lx: 355, ly: 116, anchor: 'start',
  },
];

// Om Parvat spur (fades in at Gunji)
const SPUR = [
  {
    label: 'Kalapani', sub: 'Kali Devi Mandir',
    cx: 214, cy: 214, type: 'temple',
    lx: 200, ly: 214, anchor: 'end',
  },
  {
    label: 'Om Parvat', sub: '6,191 M',
    cx: 184, cy: 183, type: 'city',
    lx: 148, ly: 162, anchor: 'end',
  },
];

// Main outward route
const PATH_D =
  'M 682,524 C 650,504 622,482 604,466 ' +
  'C 582,452 566,436 554,422 ' +
  'C 534,406 516,390 500,376 ' +
  'C 448,368 390,362 338,356 ' +
  'C 326,340 312,324 298,310 ' +
  'C 280,280 268,260 256,240 ' +
  'C 278,202 308,180 336,160';

// Spur from Gunji to Om Parvat via Kalapani
const SPUR_D =
  'M 256,240 C 244,230 230,222 214,214 ' +
  'C 202,204 192,193 184,183';

export default function YatraRouteMap() {
  const wrapperRef = useRef(null);
  const pathRef    = useRef(null);
  const trailRef   = useRef(null);
  const carRef     = useRef(null);
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const svgPath = pathRef.current;
    const trail   = trailRef.current;
    const car     = carRef.current;
    if (!wrapper || !svgPath || !trail || !car) return;

    const totalLen = svgPath.getTotalLength();
    trail.style.strokeDasharray  = `${totalLen}`;
    trail.style.strokeDashoffset = `${totalLen}`;

    const onScroll = () => {
      const rect       = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;
      setProgress(p);

      const dist  = p * totalLen;
      const pt    = svgPath.getPointAtLength(dist);
      const ptFwd = svgPath.getPointAtLength(Math.min(dist + 12, totalLen));
      const angle = Math.atan2(ptFwd.y - pt.y, ptFwd.x - pt.x) * (180 / Math.PI);
      car.setAttribute('transform', `translate(${pt.x},${pt.y}) rotate(${angle})`);
      trail.style.strokeDashoffset = `${totalLen * (1 - p)}`;

      let idx = 0;
      STOPS.forEach((s, i) => { if (p >= s.t - 0.01) idx = i; });
      setActive(idx);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const spurActive = progress >= 0.66;

  return (
    <div ref={wrapperRef} style={{ height: '480vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: '#F2EAD6' }}>
        <svg
          viewBox="0 0 840 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Adi Kailash and Om Parvat Yatra route map"
        >
          <defs>
            <filter id="ym-drop" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#1A0C04" floodOpacity="0.18"/>
            </filter>
            {/* Gradient mask: mountain fades near title and below mid-map */}
            <linearGradient id="mtn-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0"/>
              <stop offset="12%"  stopColor="white" stopOpacity="1"/>
              <stop offset="70%"  stopColor="white" stopOpacity="1"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <mask id="mtn-mask">
              <rect width="840" height="600" fill="url(#mtn-fade)"/>
            </mask>
          </defs>

          {/* Background */}
          <rect width="840" height="600" fill="#F2EAD6"/>

          {/* ── Custom mountain illustration ── */}
          {/* transform maps original viewBox (0–3003) peaks to map coords x≈40–600, y≈63–300 */}
          <g
            transform="translate(-21,-121) scale(0.221)"
            opacity="0.42"
            mask="url(#mtn-mask)"
          >
            <path d={MTN_A} fill="#2A180A" fillRule="nonzero"/>
            <path d={MTN_B} fill="#2A180A" fillRule="nonzero"/>
          </g>

          {/* ── Title ── */}
          <text x="420" y="26" textAnchor="middle" fontSize="16" fontWeight="700"
                fontFamily="Georgia,'Times New Roman',serif"
                fill="#1A0C04" letterSpacing="2.5">
            ADI KAILASH &amp; OM PARVAT YATRA
          </text>
          <text x="420" y="42" textAnchor="middle" fontSize="8.5"
                fontFamily="'Courier New',Courier,monospace"
                fill="#7A5A38" letterSpacing="7">
            UTTARAKHAND
          </text>
          <line x1="260" y1="50" x2="580" y2="50" stroke="#C86818" strokeWidth="0.8" opacity="0.55"/>
          <circle cx="260" cy="50" r="2" fill="#C86818" opacity="0.55"/>
          <circle cx="580" cy="50" r="2" fill="#C86818" opacity="0.55"/>

          {/* ── Kali River ── */}
          <path
            d="M 190,179 C 200,191 218,210 222,222 C 228,236 262,248 266,260 C 272,276 294,304 310,326 C 318,340 330,352 346,364"
            fill="none" stroke="#7AB8D8" strokeWidth="5" strokeLinecap="round"
            opacity="0.28"
          />
          <text x="290" y="268" fontSize="7" fontFamily="'Courier New',monospace"
                fill="#4A86A0" opacity="0.65"
                transform="rotate(-55,290,268)">
            KALI RIVER
          </text>

          {/* ── Parvati Sarovar ── */}
          <ellipse cx="302" cy="198" rx="17" ry="10" fill="#7AB8D8" opacity="0.28"/>
          <ellipse cx="302" cy="198" rx="17" ry="10" fill="none"
                   stroke="#5A9CB8" strokeWidth="0.8" opacity="0.5"/>
          <text x="321" y="193" fontSize="6.5" fontFamily="Georgia,serif"
                fill="#3A6A88" opacity="0.85"
                stroke="#F2EAD6" strokeWidth="2" paintOrder="stroke">Parvati</text>
          <text x="321" y="203" fontSize="6.5" fontFamily="Georgia,serif"
                fill="#3A6A88" opacity="0.85"
                stroke="#F2EAD6" strokeWidth="2" paintOrder="stroke">Sarovar</text>

          {/* ── Om Parvat spur ── */}
          <path d={SPUR_D} fill="none" stroke="#C0B8A4" strokeWidth="2"
                strokeDasharray="5 4" strokeLinecap="round"
                opacity={spurActive ? 0.12 : 0.28}
                style={{ transition: 'opacity 0.5s' }}/>
          <path d={SPUR_D} fill="none" stroke="#2A3A88" strokeWidth="2.5"
                strokeDasharray="5 4" strokeLinecap="round"
                opacity={spurActive ? 0.68 : 0}
                style={{ transition: 'opacity 0.7s ease' }}/>

          {/* ── Main route ghost (dashed grey) ── */}
          <path d={PATH_D} fill="none" stroke="#C0B8A4" strokeWidth="2.5"
                strokeDasharray="6 5" strokeLinecap="round"/>

          {/* ── Main route revealed (saffron) ── */}
          <path
            ref={trailRef}
            d={PATH_D} fill="none"
            stroke="#C86818" strokeWidth="3.5"
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.04s linear' }}
          />

          {/* ── Hidden measurement path ── */}
          <path ref={pathRef} d={PATH_D} fill="none" stroke="transparent" strokeWidth="1"/>

          {/* ── Main stop markers + labels ── */}
          {STOPS.map((s, i) => {
            const isAt   = i === active;
            const isPast = i < active;
            const dotFill   = isAt ? '#C86818' : isPast ? '#8A4818' : '#F2EAD6';
            const dotStroke = isAt || isPast ? '#7A3810' : '#A89878';

            return (
              <g key={s.label}>
                {isAt && <circle cx={s.cx} cy={s.cy} r="16" fill="#C86818" opacity="0.12"/>}

                {/* White backing for visibility on mountain terrain */}
                {(i >= 6) && (
                  <circle cx={s.cx} cy={s.cy} r="10" fill="white" opacity="0.70"/>
                )}

                {s.type === 'temple' ? (
                  <g transform={`translate(${s.cx},${s.cy})`}>
                    <rect transform="rotate(45)" x="-5.5" y="-5.5" width="11" height="11"
                          fill={dotFill} stroke={dotStroke} strokeWidth="1.5"
                          filter={isAt ? 'url(#ym-drop)' : undefined}/>
                  </g>
                ) : (
                  <circle cx={s.cx} cy={s.cy}
                          r={s.type === 'camp' ? 8 : s.type === 'city' ? 7 : 5.5}
                          fill={dotFill} stroke={dotStroke} strokeWidth="1.8"
                          filter={isAt ? 'url(#ym-drop)' : undefined}/>
                )}

                {isPast && s.type !== 'temple' && (
                  <circle cx={s.cx} cy={s.cy} r="2.8" fill="#F2EAD6"/>
                )}

                {/* Label with white halo for readability over mountain */}
                <text
                  x={s.lx} y={s.ly}
                  textAnchor={s.anchor} dominantBaseline="middle"
                  fontSize={isAt ? '12' : '10.5'}
                  fontFamily="Georgia,'Times New Roman',serif"
                  fontWeight={isAt ? '700' : isPast ? '600' : '400'}
                  fill={isAt ? '#3A1208' : isPast ? '#1E0C04' : '#5A4838'}
                  stroke="#F2EAD6" strokeWidth="3.5" strokeLinejoin="round"
                  paintOrder="stroke"
                >
                  {s.label}
                </text>
                {s.sub && (
                  <text
                    x={s.lx} y={s.ly + 15}
                    textAnchor={s.anchor} dominantBaseline="middle"
                    fontSize="7.5"
                    fontFamily="'Courier New',Courier,monospace"
                    fill={isAt ? '#9A4818' : '#7A6040'}
                    stroke="#F2EAD6" strokeWidth="3" strokeLinejoin="round"
                    paintOrder="stroke"
                  >
                    {s.sub}
                  </text>
                )}
              </g>
            );
          })}

          {/* ── Spur stops (Kalapani & Om Parvat) ── */}
          {SPUR.map((s) => (
            <g key={s.label}
               opacity={spurActive ? 1 : 0.08}
               style={{ transition: 'opacity 0.7s ease' }}>
              {/* White backing for mountain stops */}
              <circle cx={s.cx} cy={s.cy} r="10" fill="white" opacity="0.70"/>

              {s.type === 'temple' ? (
                <g transform={`translate(${s.cx},${s.cy})`}>
                  <rect transform="rotate(45)" x="-5.5" y="-5.5" width="11" height="11"
                        fill="#2A3A88" stroke="#1A2A68" strokeWidth="1.5"/>
                </g>
              ) : (
                <circle cx={s.cx} cy={s.cy} r="7"
                        fill="#2A3A88" stroke="#1A2A68" strokeWidth="1.8"/>
              )}

              <text x={s.lx} y={s.ly}
                    textAnchor={s.anchor} dominantBaseline="middle"
                    fontSize="10.5" fontFamily="Georgia,'Times New Roman',serif"
                    fontWeight="600" fill="#1A2A58"
                    stroke="#F2EAD6" strokeWidth="3.5" strokeLinejoin="round"
                    paintOrder="stroke">
                {s.label}
              </text>
              {s.sub && (
                <text x={s.lx} y={s.ly + 15}
                      textAnchor={s.anchor} dominantBaseline="middle"
                      fontSize="7.5" fontFamily="'Courier New',Courier,monospace"
                      fill="#2A3A78"
                      stroke="#F2EAD6" strokeWidth="3" strokeLinejoin="round"
                      paintOrder="stroke">
                  {s.sub}
                </text>
              )}
            </g>
          ))}

          {/* ── Car (top-down jeep) ── */}
          <g ref={carRef} transform="translate(682,524)">
            <ellipse cx="1" cy="2" rx="14" ry="9" fill="#000" opacity="0.15"/>
            <rect x="-13" y="-7.5" width="26" height="15" rx="5" fill="#C86818"
                  filter="url(#ym-drop)"/>
            <rect x="-6.5" y="-6" width="16" height="12" rx="2.5" fill="#9A4A10"/>
            <path d="M 7,-7 L 13,-4.5 L 13,4.5 L 7,7 Z" fill="#080402" opacity="0.28"/>
            <path d="M 8,-6.5 L 12,-4 L 12,4 L 8,6.5 Z" fill="#9DD4F4" opacity="0.65"/>
            <rect x="-17" y="-9.5" width="5.5" height="4"   rx="1.8" fill="#080402"/>
            <rect x="-17" y="  5.5" width="5.5" height="4"  rx="1.8" fill="#080402"/>
            <rect x=" 11" y="-9.5" width="5.5" height="4"   rx="1.8" fill="#080402"/>
            <rect x=" 11" y="  5.5" width="5.5" height="4"  rx="1.8" fill="#080402"/>
            <circle cx="14" cy="-3.5" r="2.2" fill="#FFFFA0" opacity="0.9"/>
            <circle cx="14" cy=" 3.5" r="2.2" fill="#FFFFA0" opacity="0.9"/>
          </g>

          {/* ── Compass rose ── */}
          <g transform="translate(54,548)">
            <circle r="19" fill="#F2EAD6" stroke="#A09070" strokeWidth="1"/>
            <path d="M 0,-16 L 3.5,-4 L 0,-7 L -3.5,-4 Z" fill="#C86818"/>
            <path d="M 0,16  L 3.5,4  L 0,7  L -3.5,4  Z" fill="#A09070"/>
            <path d="M -16,0 L -4,-3.5 L -7,0 L -4,3.5 Z" fill="#A09070"/>
            <path d="M  16,0 L  4,-3.5 L  7,0 L  4,3.5 Z" fill="#A09070"/>
            <text y="-21" textAnchor="middle" fontSize="7.5"
                  fontFamily="'Courier New',monospace" fill="#5A4830" fontWeight="700">N</text>
          </g>
          <text x="54" y="578" textAnchor="middle" fontSize="6.5"
                fontFamily="'Courier New',monospace" fill="#9A8060">
            Return via same route
          </text>

          {/* ── Scroll hint ── */}
          <text x="420" y="587" textAnchor="middle" fontSize="8"
                fontFamily="'Courier New',Courier,monospace"
                fill="#9A8060" letterSpacing="4">
            SCROLL TO DRIVE THE ROUTE ↓
          </text>

          {/* ── Active stop info ── */}
          <rect x="618" y="556" width="200" height="36" rx="5"
                fill="#1A0C04" opacity="0.055"/>
          <text x="630" y="570" fontSize="11"
                fontFamily="Georgia,'Times New Roman',serif"
                fontWeight="700" fill="#2A1004">
            {STOPS[active].label}
          </text>
          <text x="630" y="585" fontSize="7.5"
                fontFamily="'Courier New',Courier,monospace"
                fill="#7A5030">
            {STOPS[active].sub || 'En route'}
          </text>

          {/* ── Progress bar ── */}
          <rect x="0" y="597" width="840" height="3" fill="#D8CEB4"/>
          <rect x="0" y="597" width={Math.round(840 * progress)} height="3" fill="#C86818"
                style={{ transition: 'width 0.04s linear' }}/>
        </svg>
      </div>
    </div>
  );
}
