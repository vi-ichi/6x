"use client";

import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
import data from "./data";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [d, setD] = useState(data);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  function pop(answer, type) {
    if (start === 0) {
      setStart(Date.now());
    }

    if (answer === d.at(-1).answer) {
      if (d.length === 1) {
        setEnd(Date.now());
      }

      setD(d.filter((_, i) => i !== d.length - 1));
    } else {
      setD([d.at(-1), ...d.filter((_, i) => i !== d.length - 1)]);
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient overflow-hidden">
      <div className="text-center text-7xl w-[300px]">
        {end !== 0 && Math.floor((end - start) / 1000)}
      </div>
      <AnimatePresence>
        {d.map((c) => (
          <Card type={c.type} key={nanoid()} pop={pop}>
            {c.content}
          </Card>
        ))}
      </AnimatePresence>
    </div>
  );
}
