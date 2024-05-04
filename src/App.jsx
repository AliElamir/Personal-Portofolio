import "./App.scss"
// import NavBar from "./components/NavBar"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Home from "./components/Home"
import Transition from "./components/transitions/Transition"
import Project from "./components/projectss/Project"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"

const App = () => {
  const home = useRef()
  const projects = useRef()
  const about = useRef()
  const contact = useRef()

  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <section>
        <div className="flex justify-between h-36 items-center pr-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-24 pl-4"
              src="src\assets\logo-no-background.png"
              alt="logo"
            />
          </motion.div>
          <div className="flex p-4 gap-12 flex-row-reverse text-2xl">
            <button
              className="border-b-2 border-transparent hover:border-teal-100"
              onClick={() => {
                scrollToElement(contact)
              }}
            >
              <p>Contact</p>
            </button>
            <button
              className="border-b-2 border-transparent hover:border-teal-100"
              onClick={() => {
                scrollToElement(about)
              }}
            >
              <p>About</p>
            </button>
            <button
              className="border-b-2 border-transparent hover:border-teal-100"
              onClick={() => {
                scrollToElement(projects)
              }}
            >
              <p>Projects</p>
            </button>
            <button
              className="border-b-2 border-transparent hover:border-teal-100"
              onClick={() => {
                scrollToElement(home)
              }}
            >
              <p>Home</p>
            </button>
          </div>
        </div>
        <div
          ref={home}
          className="h-screen flex flex-col justify-center items-center text-3xl"
        >
          <Home />
        </div>
      </section>
      <section>
        <Transition />
      </section>
      <div ref={projects}>
        <Project />
      </div>
      <section ref={about}>
        <About />
      </section>
      <section ref={contact}>
        <Contact />
      </section>
    </div>
  )
}

export default App
