import React, { useState } from "react";
import cn from "classnames"; // import cn helper
import CLogo from "../logo/logo.png"
import { RxCross1 } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { TbView360Number } from "react-icons/tb";

import { IoIosAddCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";

const Card = () => {
    const [open,setOpen]=useState(true)
  return (
    <>
    <AnimatePresence>
    {open &&(
        <motion.div
        initial={{
            opacity:0,
            scale:0.98,
            filter:'blur(10px)'
        }}
        animate={{
            opacity:1,
            scale:1,
            filter:'blur(0px)'

        }}
        exit={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
        }}
        transition={{
            duration:0.5,
            ease:'easeInOut'
        }}
        className={cn("w-72 min-h-[24rem] rounded-xl bg-white" , 
    "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    'p-6 flex flex-col')}>
        <h2 className="font-bold text-xs">Custom UI Components</h2>
        <p className="text-neutral-600 mt-2 text-xs">A collection of beautiful UI components, let's get on with it.</p>
        <div className="flex items-center justify-center 
         ">
            <button onClick={() => setOpen(false)}  className="flex items-center gap-1 text-xs mt-4
            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
            rounded-md px-2 py-1">
                <img  className="w-4 h-4 " src={CLogo} alt="" />
                Custom
                <RxCross1 className="w-3 h-3 text-neutral-400"/>
            </button>
        </div>
        <div className="relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200">
            {/* Motion divs here */}
            <motion.div
            initial={{
                opacity:0, 
                scale:0.98,
                filter:"blur(10px)"

            }}
            whileHover={{
                opacity:1,
                scale:1.05,
                filter:"blur(0px)",
                
            }}
            transition={{
                // duration:0.5,
                // ease:'easeInOut'
                type:'spring',
                stiffness:200,
                damping:15,
                mass:1
            }}
            className="absolute border border-neutral-200 inset-0 h-full w-full  bg-white rounded-lg divide-y divide-neutral-200">
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 shrink-0 bg-linear-to-br
                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center">
                        <FaRegMessage className="h-4 w-4 text-neutral-600"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[8px] font-bold text-neutral-600">Custom UI Components</p>
                        <p className="text-[8px] mt-1 text-neutral-400">Custom UI Components</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 shrink-0 bg-linear-to-br
                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center">
                        <Ri24HoursLine className="h-4 w-4 text-neutral-600"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[8px] font-bold text-neutral-600">24 Hours turnaround</p>
                        <p className="text-[8px] mt-1 text-neutral-400">Super fast delivery at warp speed.</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 shrink-0 bg-linear-to-br
                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center">
                        <TbView360Number className="h-4 w-4 text-neutral-600"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[8px] font-bold text-neutral-600">360 days all around</p>
                        <p className="text-[8px] mt-1 text-neutral-400">We're help to you 24/7</p>
                    </div>
                </div>
                <div className="flex justify-center gap-1 items-center mt-2.5">
                    <div className="h-4 w-4 shrink-0 bg-linear-to-br
                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-full flex items-center justify-center">
                        <IoIosAddCircleOutline className="h-3 w-3 text-neutral-600"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[8px] mt-1 text-neutral-400">Create projects</p>
                    </div>
                </div>
                
            </motion.div>
            {/* Motion divs end here */}
        </div>
    </motion.div>
    )}
    </AnimatePresence>
    </>
    
  );
};

export default Card;
