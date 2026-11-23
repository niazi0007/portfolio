export default function Rack() {
  const units = [45, 90, 135, 250, 295];
  return (
    <svg width="240" height="380" viewBox="0 0 300 440" fill="none" stroke="#cfd8e3" strokeWidth="1.2" aria-hidden="true">
      <path d="M60 20 L240 20 L270 40 L270 420 L90 420 L60 400 Z" />
      <path d="M60 20 L60 400 M240 20 L240 400 L270 420 M240 400 L60 400" />
      <g stroke="#7f8fa0">
        {units.map((y) => <rect key={y} x="75" y={y} width="150" height="34" />)}
        <rect x="75" y="180" width="150" height="60" />
        <rect x="75" y="340" width="150" height="45" />
      </g>
      <g stroke="#5b6b7a">
        {units.map((y) => <line key={y} x1="90" y1={y + 17} x2="180" y2={y + 17} />)}
      </g>
      <g stroke="none">
        {units.map((y, i) => (
          <circle key={y} className={`led l${(i % 3) + 1}`} cx="210" cy={y + 17} r="3" fill="#38bdf8" />
        ))}
        <circle className="led red" cx="198" cy="107" r="3" fill="#e11d48" />
      </g>
    </svg>
  );
}
