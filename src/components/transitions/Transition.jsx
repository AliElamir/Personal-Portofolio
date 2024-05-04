import './transition.scss'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Transition = () =>{

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start start','end start']
  })

  const yText = useTransform(scrollYProgress, [0,1], ['0%', '200%'])
  const yBg = useTransform(scrollYProgress, [0,2], ['-25%', '10%'])

  //make div inside screen and put the picture in that div and hide overflow


  return(
    <div ref={ref} className=' transitiondiv'>
      {/* <motion.h1 style={{ y: yText}}>Projects</motion.h1> */}
      <motion.div className='monitor'></motion.div>
      <motion.div style={{ y: yBg}} className='coding'></motion.div>
    </div>
  )
}

export default Transition