import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return <div className="border-b border-neutral-900 pb-20">
    <div className="text-center tracking-tighter">
    <motion.h1
  whileInView={{opacity:1, x:0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
    className="text-center text-4xl">Contact</motion.h1>
        <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
        className="my-4">{CONTACT.linkedin}</motion.p>
        <motion.p
          whileInView={{opacity:1, x:0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">{CONTACT.email}</a>
    </div>
        </div>
}

export default Contact