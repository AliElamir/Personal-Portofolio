import "./project.scss"
import { useScroll, motion, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const Project = () => {
  const items = [
    {
      id: 1,
      title: "Nabtah",
      img: "https://camo.githubusercontent.com/02d7742b61544a444cbe3d95d1ebebbaa85b7c0f884c390ccb9334cfe16b8f2f/68747470733a2f2f692e696d6775722e636f6d2f5349464376334e2e706e67",
      desc: "Nabtah is your one-stop destination for all your plant and plant care needs. Our platform connects you with shops offering a wide range of plants, tools, and accessories, making it easy to find everything you need to nurture your green space. Whether you're a seasoned gardener or just starting out, Nabtah has you covered with a curated selection of shops selling plants and gardening essentials.",
    },
    {
      id: 2,
      title: "Cooked",
      img: "https://themewagon.com/wp-content/uploads/2021/12/restoran.png",
      desc: "Cooked is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed to connect users with restaurants, allowing users to order food, while restaurants can manage their menus and job openings.",
    },
    {
      id: 3,
      title: "Abs-olute Fitness",
      img: "https://github.com/nakz57/Abs-olute_Project/raw/main/image1.png",
      desc: "Abs-Olute is a community type website where people come in together to either create or find workouts!! The website requires you to log in to access its facility like creating, adding and interacting with workouts whether it was your or fellow Abs-oluters. Thats not all, you can also add your personal information to keep track of your athletic progress.",
    },
  ]

  const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
      <section>
        <div className="containers">
          <div className="wrapper">
            <div className="imgContainer" ref={ref}>
              <img
                className=" rounded-2xl max-w-4xl"
                src={item.img}
                alt="image"
              />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="projectdiv" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Project
