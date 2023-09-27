"use client";

import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
import data from "./data";
import { useState } from "react";

export default function Home() {
  const [d, setD] = useState(data);
  const [e, setE] = useState(0);

  function pop(answer) {
    if (d.at(-1).answer !== answer) {
      setE(e + 1);
    }

    setD(d.filter((_, i) => i !== d.length - 1));
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient">
      {e === 0 && <div className="text-center text-7xl text-green-500">{e}</div>}
      {e !== 0 && <div className="text-center text-7xl text-red-500">{e}</div>}
      <AnimatePresence>
        {d.map((c, i) => (
          <Card key={i} pop={pop}>
            {c.content}
          </Card>
        ))}
      </AnimatePresence>
    </div>
  );
}
