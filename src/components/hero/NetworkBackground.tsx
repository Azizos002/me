const nodes = [
  { x: 8, y: 20, size: 8, delay: 0.1 },
  { x: 22, y: 38, size: 7, delay: 0.6 },
  { x: 36, y: 16, size: 9, delay: 0.3 },
  { x: 48, y: 34, size: 7, delay: 1.1 },
  { x: 58, y: 14, size: 8, delay: 0.8 },
  { x: 68, y: 44, size: 9, delay: 0.4 },
  { x: 81, y: 24, size: 8, delay: 1.4 },
  { x: 15, y: 70, size: 10, delay: 0.5 },
  { x: 31, y: 62, size: 7, delay: 0.2 },
  { x: 49, y: 76, size: 8, delay: 1.2 },
  { x: 66, y: 66, size: 9, delay: 0.9 },
  { x: 85, y: 78, size: 7, delay: 0.7 },
];

const links = [
  { from: 0, to: 2 },
  { from: 0, to: 1 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 6 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 1, to: 8 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 9, to: 10 },
  { from: 10, to: 11 },
  { from: 5, to: 10 },
  { from: 6, to: 11 },
  { from: 4, to: 5 },
];

const particles = [
  { x: 14, y: 16, size: 3, delay: 0.2, duration: 7 },
  { x: 30, y: 26, size: 2, delay: 1.4, duration: 6 },
  { x: 44, y: 10, size: 2, delay: 0.7, duration: 8 },
  { x: 56, y: 28, size: 3, delay: 2.2, duration: 5.5 },
  { x: 70, y: 18, size: 2, delay: 1.8, duration: 7.5 },
  { x: 82, y: 34, size: 3, delay: 0.9, duration: 6.5 },
  { x: 20, y: 58, size: 2, delay: 1.2, duration: 7.2 },
  { x: 34, y: 72, size: 3, delay: 0.4, duration: 6.9 },
  { x: 51, y: 64, size: 2, delay: 1.6, duration: 5.8 },
  { x: 65, y: 74, size: 3, delay: 0.1, duration: 7.8 },
  { x: 78, y: 62, size: 2, delay: 2.4, duration: 6.1 },
  { x: 88, y: 82, size: 2, delay: 1.1, duration: 8.4 },
];

const getLink = (from: (typeof nodes)[number], to: (typeof nodes)[number]) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  return {
    left: `${from.x}%`,
    top: `${from.y}%`,
    width: `${distance}%`,
    transform: `rotate(${angle}deg)`,
  };
};

export function NetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.15),transparent_50%)]" />

      {links.map((link, index) => {
        const from = nodes[link.from];
        const to = nodes[link.to];
        const style = getLink(from, to);

        return (
          <span
            key={`link-${index}`}
            className="absolute h-px origin-left bg-gradient-to-r from-cyan-500/30 via-cyan-300/80 to-transparent network-link"
            style={{
              ...style,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        );
      })}

      {nodes.map((node, index) => (
        <span
          key={`node-${index}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/90 shadow-[0_0_18px_rgba(34,211,238,0.9)] node-pulse"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}

      {particles.map((particle, index) => (
        <span
          key={`packet-${index}`}
          className="absolute rounded-full bg-cyan-100/95 data-packet"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
