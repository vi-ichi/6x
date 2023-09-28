"use client";

import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
import data from "./data";
import { useState } from "react";

export default function Home() {
  const [i, setI] = useState(0);

  function pop(answer, type) {
    setI(current + 1);
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient overflow-hidden">
      <AnimatePresence>
        <Card type={data[i].type} pop={pop}>
          {data[i].content}
        </Card>
      </AnimatePresence>
    </div>
  );
}
