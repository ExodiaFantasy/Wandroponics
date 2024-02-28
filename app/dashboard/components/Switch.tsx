"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { RxMixerVertical } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function SwitchGroup() {
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  return (
    <div className="bg-white flex justify-start py-8 mt-6 mx-8 rounded-3xl max-container padding-container">
      <Switch label="Lights" toggle={toggle1} setToggle={setToggle1} icon={<HiOutlineLightBulb size={30} />} />
      <Switch label="Mixer" toggle={toggle2} setToggle={setToggle2} icon={<RxMixerVertical size={30} />} />
    </div>
  );
}

function Switch({
  label,
  toggle,
  setToggle,
  icon,
}: {
  label: string;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex mx-60 items-center">
      <div className="flex items-center">
        {icon}
        <div className="text-xl font-semibold mx-2 text-green-900">{label}</div>
      </div>

      <div
        onClick={() => setToggle(!toggle)}
        className={`flex h-8 w-16 cursor-pointer rounded-full border border-green-900 ${
          toggle ? "justify-start bg-white" : "justify-end bg-green-900"
        } p-[1px] mb-2`}
      >
        <motion.div
          className={`flex h-7 w-8 rounded-full ${
            toggle ? "bg-green-900" : "bg-white"
          }`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
}
