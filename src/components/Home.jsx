import "./home.scss"
import { motion } from "framer-motion"

const Home = () => {
  const textVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  }

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  }

  return (
    <div className="homediv flex justify-center">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex items-center gap-20 mb-44"
      >
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <motion.img
            variants={textVariants}
            className=" rounded-xl h-64"
            src="src\assets\custompfp.png"
            alt="samp"
          />
        </motion.div>
        <motion.div className=" hometext" variants={textVariants}>
          <motion.p variants={textVariants} className="myname py-4">
            Hello, my name is{" "}
            <span className=" text-4xl italic font-semibold mynameis">
              Ali Elamir
            </span>{" "}
            !
          </motion.p>
          <motion.p variants={textVariants}>
            A Full Stack Web Developer committed to delivering exceptional
            digital experiences.
          </motion.p>
          <motion.div variants={textVariants} className="my-8">
            <motion.button
              onClick={() => {
                scrollToElement(about)
              }}
              variants={textVariants}
              className=" buttons"
            >
              My Work
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className=" h-10"
            src="src\assets\mouse-cursor.png"
            alt="mouse"
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="slidingtext"
        >
          Developer
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
