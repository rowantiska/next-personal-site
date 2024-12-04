import React from 'react'
import Project from './Project'
import berribasket from './static/BerriBasketPromo.png'
import berribasket2 from './static/BerriBasket.png'
import { motion, AnimatePresence} from "motion/react"

export default function ProjectsShown(props) {


  return (
    <div> 

<AnimatePresence>
        {props.dev && (
          <motion.div
            layoutId="modal"
            initial={{ opacity: 0, scale: 0.8 }} // Animation when the element appears
            animate={{ opacity: 1, scale: 1 }} // Animation during its presence
            exit={{ opacity: 0, scale: 0.8 }} // Animation when it exits
            transition={{ duration: 0.3 }} // Control animation timing
          >
            <div className='border border-[#000] rounded-md p-6'>
              <p className='text-3xl mb-4'>Dev Projects</p>
              <div className='overflow-auto h-[50rem] '>
                <Project name={"BerriBasket"} date={"2020-2024"} pic1={berribasket} pic2={berribasket2} stack={"React, Tailwind, Python, SQL, Flask"} award={"Awards: "} awards={"2022 Congressional App Challenge Winner, 2023 Blue Ocean Student Entrepreneur Competition Top 30 Pitch, 1517 Fund Medici Grant Recipient"} link={"https://berribasket.com"} linkL={"Explore live site"} />
                <Project name={"BerriBasket"} date={"2020-2024"} pic1={berribasket} pic2={berribasket2} stack={"React, Tailwind, Python, SQL, Flask"} />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
