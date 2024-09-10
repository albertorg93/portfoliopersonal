import { EXTRA } from "../constants"
import { motion } from "framer-motion"

const Extra = () => {
  return  <div className="border-b border-neutral-900 pb-10">
  <motion.h2 
    whileInView={{opacity:1, x:0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 0.5}}
  className="my-5 text-center text-4xl">Other Relevant Information</motion.h2>
  <div>
      {EXTRA.map((extr, index) => (
     <div
      key={index}
      className="mb-4 flex flex-wrap lg:justify-center"
      >
        <motion.div 
          whileInView={{opacity:1, x:0}} 
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
        className="w-full lg:w-1/4">
        <p className="text-base text-neutral-400">{extr.texto}</p>
        </motion.div> 
     
      </div>  
  ))}
  </div>
</div>

//   <div className="border-b border-neutral-900 pb-20">
//     <div className=" tracking-tighter mx-72 text-center">
//     <motion.h1
//   whileInView={{opacity:1, x:0}}
//   initial={{opacity: 0, x: 100}}
//   transition={{duration: 1}}
//     className="text-center text-4xl">Other Relevant Information</motion.h1>
//         <motion.p 
//           whileInView={{opacity:1, x:0}}
//           initial={{opacity: 0, x: -100}}
//           transition={{duration: 1}}
//         className="my-4">{EXTRA.texto1}</motion.p>
//         <motion.p 
//           whileInView={{opacity:1, x:0}}
//           initial={{opacity: 0, x: -100}}
//           transition={{duration: 1}}
//         className="my-4">{EXTRA.texto2}</motion.p>
//         <motion.p 
//           whileInView={{opacity:1, x:0}}
//           initial={{opacity: 0, x: -100}}
//           transition={{duration: 1}}
//         className="my-4">{EXTRA.texto3}</motion.p>
//         <motion.p 
//           whileInView={{opacity:1, x:0}}
//           initial={{opacity: 0, x: -100}}
//           transition={{duration: 1}}
//         className="my-4">{EXTRA.texto4}</motion.p>
//     </div>
//         </div>
}

export default Extra 