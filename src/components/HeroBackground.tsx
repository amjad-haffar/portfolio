const symbols = ['♪', '♫', '♩', '♬', '</>', '{ }'];

const particles = Array.from({ length: 40 }, (_, i) => ({
  symbol: symbols[i % symbols.length],
  left: `${Math.random() * 100}%`,
  top: '100%',
  size: `${18 + Math.random() * 32}px`,
  duration: `${10 + Math.random() * 15}s`,
  delay: `${-Math.random() * 25}s`,
}));

export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      {particles.map((particle, i) => (
        <span
          key={i}
          style={{
            left: particle.left,
            top: particle.top,
            fontSize: particle.size,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  );
}