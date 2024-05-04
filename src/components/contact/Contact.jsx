import "./contact.scss"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Contact = () => {
  
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="contactdiv"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textCont" variants={variants}>
        <motion.h1 variants={variants}>Contact me!</motion.h1>
        <motion.div variants={variants} className="item">
          <h2 className=" text-3xl pb-8">Mail</h2>
          <span className="text-white">ali.elamiir.a@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2 className="text-3xl pb-8 ">Phone</h2>
          <span className="text-white">+973 3828 0265</span>
        </motion.div>
      </motion.div>
      <div className="formCont">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows="3" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
