"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/store";
const DashBoardPage = () => {
  const domain = useStore((state) => state.domain);
  console.log(domain);
  return (
    <div className="  flex-col h-full  flex justify-center items-center bg-gradient-to-b from-slate-800 via-gray-500  to-blue-300">
      <h1 className="text-3xl text-white py-10 ">Choose your Template</h1>
      <div className="w-[70%] flex  flex-wrap gap-6  border-2 p-10 justify-center">
        <motion.div
          onClick={() => {
            location.replace(`http://${domain}.localhost:3000/`);
          }}
          className="w-[25%] cursor-pointer "
          initial={{ boxShadow: "0px 0px 0 #fff" }}
          whileHover={{ boxShadow: "2px 2px 0px 0px #fff" }}
          exit={{ width: "30%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src="/template-1.jpg" alt="" />
        </motion.div>
        <motion.div className="w-[25%] ">
          <img src="/comingSoon.jpg" alt="" />
        </motion.div>
        <motion.div className="w-[25%]">
          <img src="/comingSoon.jpg" alt="" />
        </motion.div>
        <motion.div className="w-[25%]">
          <img src="/comingSoon.jpg" alt="" />
        </motion.div>
        <motion.div className="w-[25%]">
          <img src="/comingSoon.jpg" alt="" />
        </motion.div>
        <motion.div className="w-[25%]">
          <img src="/comingSoon.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoardPage;
