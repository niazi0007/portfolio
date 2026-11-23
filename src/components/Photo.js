"use client";
import { useState } from "react";

export default function Photo({ src, alt }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img className="photo" src={src} alt={alt} onError={() => setOk(false)} />;
}
