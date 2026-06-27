export default function ContourLine({ className = "", variant = "default" }) {
  // A hand-built topographic silhouette referencing the Panchachuli /
  // Adi Kailash skyline — used as a recurring signature motif rather
  // than a stock photo or generic divider.
  const stroke = variant === "light" ? "var(--color-pine)" : "var(--color-gold)";

  return (
    <svg
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,140 L60,100 L120,130 L190,55 L230,90 L280,40 L330,95 L380,70
           L430,15 L470,60 L520,30 L560,85 L620,5 L660,50 L710,20 L760,75
           L820,45 L870,100 L930,60 L980,110 L1040,75 L1090,120 L1150,90 L1200,135"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0,140 L60,100 L120,130 L190,55 L230,90 L280,40 L330,95 L380,70
           L430,15 L470,60 L520,30 L560,85 L620,5 L660,50 L710,20 L760,75
           L820,45 L870,100 L930,60 L980,110 L1040,75 L1090,120 L1150,90 L1200,135
           L1200,160 L0,160 Z"
        fill={stroke}
        opacity="0.06"
      />
    </svg>
  );
}
