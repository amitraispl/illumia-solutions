"use client";

import { useRef, useEffect, useState } from "react";

export default function StickyFooterWrapper({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (innerRef.current) setHeight(innerRef.current.offsetHeight);
    });
    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ height, clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div ref={innerRef} className="fixed bottom-0 w-full">
        {children}
      </div>
    </div>
  );
}
