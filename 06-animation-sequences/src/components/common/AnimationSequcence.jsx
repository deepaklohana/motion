import React from 'react'
import { motion,useAnimate } from 'motion/react'

const AnimationSequcence = () => {
    const [scope,animate]=useAnimate()
    const startAnimate=async ()=>{
        animate('.text',{display:'none'},{duration:0.1})
        await animate('button',{width:'5rem',borderRadius:'1000px'},{duration:0.3})
        animate('.spinning-circle',{opacity:1,scale:[0,1.2,0.8,1]},{duration:0.5})
    }
  return (
    <div ref={scope} className='relative w-60 h-20 flex items-center justify-center'>
        
      <motion.button
      onClick={startAnimate}
      style={{width:'30rem'}} className='h-20 rounded-lg cursor-pointer bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500  text-white font-medium'>
       <span className='text'> Purchase Now ($169)</span>
      </motion.button>
      <motion.div
      style={{opacity:0,scale:0}}
      className='spinning-circle h-20 w-20 rounded-full bg-green-500 absolute inset-0 m-auto'>

      </motion.div>
    </div>
  )
}

export default AnimationSequcence
