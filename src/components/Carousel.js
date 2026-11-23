"use client";
import { useMemo, useRef, useState } from "react";

const FILTERS = ["ALL", "INFRASTRUCTURE", "CLOUD & DEVOPS", "NETWORK", "SECURITY"];

export default function Carousel({ projects }) {
  const [filter, setFilter] = useState("ALL");
  const [index, setIndex] = useState(0);
  const drag = useRef(null);

  const list = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((p) => p.cat === filter)),
    [filter, projects]
  );
  const count = list.length;
  const go = (d) => count && setIndex((i) => (i + d + count) % count);

  const style = (i) => {
    let off = i - index;
    if (off > count / 2) off -= count;
    if (off < -count / 2) off += count;
    const abs = Math.abs(off);
    if (abs > 2) return { opacity: 0, pointerEvents: "none", transform: `translateX(${off * 400}px) translateZ(-500px)` };
    return {
      transform: `translateX(${off * 390}px) translateZ(${abs === 0 ? 60 : -120 * abs}px) rotateY(${-off * 30}deg)`,
      opacity: abs === 2 ? 0.35 : 1,
      zIndex: 10 - abs,
    };
  };

  const onDown = (e) => { drag.current = e.clientX; };
  const onUp = (e) => {
    if (drag.current === null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f} className={f === filter ? "on" : ""} onClick={() => { setFilter(f); setIndex(0); }}>
            {f}
          </button>
        ))}
      </div>
      <div className="stage" onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={() => (drag.current = null)}
        onWheel={(e) => { if (Math.abs(e.deltaX) > 20) go(e.deltaX > 0 ? 1 : -1); }}>
        {list.map((p, i) => (
          <div key={p.title} className={`pcard ${i === index ? "active" : ""}`} style={style(i)} onClick={() => setIndex(i)}>
            {p.link && i === index && <a className="open" href={p.link} target="_blank" rel="noreferrer">OPEN ↗</a>}
            <div className="k">{p.cat}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="tags">{p.tags.join(" · ").toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div className="cap"><b>{list[index]?.title}</b>DRAG · SCROLL · OR USE ARROWS</div>
      <div className="arrows">
        <button aria-label="Previous" onClick={() => go(-1)}>←</button>
        <button aria-label="Next" onClick={() => go(1)}>→</button>
      </div>
    </>
  );
}
