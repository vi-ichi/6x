import { motion } from "framer-motion";
import { useState } from "react";

export default function Card({ pop, children }) {
  const [x, setX] = useState(0);

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
    <motion.div
      exit={{ x }}
      onDragEnd={onDragEnd}
      drag
      className="text-black text-4xl absolute h-[430px] w-[300px] bg-white rounded-2xl flex flex-col justify-center items-center cursor-grab"
    >
      {children}
    </motion.div>
  );
}
