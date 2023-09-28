"use client";

import { AnimatePresence } from "framer-motion";
import data from "./data";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [i, setI] = useState(0);
  const [x, setX] = useState(0);

  function pop(answer, type) {
    setI(i + 1);
  }

  function onDragEnd(_, info) {
    if (info.offset.x > 0) {
      setX(1000);
      pop(true);
      return;
    }

    if (info.offset.x < 0) {
      setX(-1000);
      pop(false);
      return;
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient overflow-hidden">
      <AnimatePresence>
        <motion.div
          exit={{ x }}
          onDragEnd={onDragEnd}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          className={`text-4xl absolute h-[430px] w-[300px] ${
            data[i].type === "ask"
              ? "bg-white text-black"
              : "bg-green-500 text-white"
          } rounded-2xl flex flex-col justify-center items-center cursor-grab`}
        >
          {data[i].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
