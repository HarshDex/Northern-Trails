const items = [
  { text: 'Adi Kailash & Om Parvat',  tag: '5,945 M / 6,191 M' },
  { text: 'Panchachuli Base Camp',     tag: '4,500 M' },
  { text: 'Darma Valley Trail',        tag: '3,200 M' },
  { text: 'Native Dharchula Guides',   tag: '100%' },
  { text: 'Himalayan Conservation',    tag: 'Since Day 1' },
  { text: 'Twin Darshan Yatra',        tag: 'One Package' },
  { text: 'Adi Kailash & Om Parvat',  tag: '5,945 M / 6,191 M' },
  { text: 'Panchachuli Base Camp',     tag: '4,500 M' },
  { text: 'Darma Valley Trail',        tag: '3,200 M' },
  { text: 'Native Dharchula Guides',   tag: '100%' },
  { text: 'Himalayan Conservation',    tag: 'Since Day 1' },
  { text: 'Twin Darshan Yatra',        tag: 'One Package' },
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-cream-alt py-4"
      aria-hidden="true"
    >
      {/* fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-cream-alt), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-cream-alt), transparent)' }}
      />

      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
            <span className="font-display text-[15px] font-medium text-charcoal/65">
              {item.text}
            </span>
            <span className="font-mono text-[10px] text-saffron border border-saffron/25 rounded-full px-2 py-0.5 uppercase tracking-wider">
              {item.tag}
            </span>
            <span className="text-mist/40 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
