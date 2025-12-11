import React from 'react'
import { easeInOut, motion } from "motion/react"
const App = () => {
  return (
    <div
    style={{backgroundImage:`radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.1) 0.5px, transparent 0`,
            backgroundSize:"8px 8px",
            backgroundRepeat:"repeat",
    }}  
    className='[perspective::1000px] transform-3d w-full h-screen bg-neutral-900 flex items-center justify-center'>
      <motion.button 
      // initial={{rotate:0}} animate={{rotate:[0,20,0]}} transition={{duration:0.5,ease:'easeInOut'}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      whileHover={{rotateX:25,rotateY:10, boxShadow:'0px 20px 50px rgba(8,112,184,0.7)',y:-5,x:-5}}
      whileTap={{x:0,y:0}}
      
      style={{translateZ:100}}
      transition={{duration:0.3, ease:'easeInOut'}}
      className='group relative text-neutral-500 bg-black px-12 py-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]  '>
        <span className='group-hover:text-cyan-500 transition-colors duration-600'>Click Here</span>
        <span className='absolute left-1/2 -translate-x-1/2 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 -translate-x-1/2 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-3/4 mx-auto blur-md'></span>
      </motion.button>
    </div>
  )
}

export default App
