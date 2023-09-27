"use client";

import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
import data from "./data";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [d, setD] = useState(data);

  function pop(answer) {
    if (answer === d.at(-1).answer) {
      setD(d.filter((_, i) => i !== d.length - 1));
    } else {
      setD([d.at(-1), ...d.filter((_, i) => i !== d.length - 1)]);
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient overflow-hidden">
      <div className="text-center text-7xl text-green-500 w-[300px]">
        Новый уровень
      </div>
      <AnimatePresence>
        {d.map((c) => (
          <Card key={nanoid()} pop={pop}>
            {c.content}
          </Card>
        ))}
      </AnimatePresence>
    </div>
  );
}
