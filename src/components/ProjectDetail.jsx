import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ServiceCard = ({ index, title, image,link }) => {
  return (
    <Tilt className="xs:w-[300px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
        <div className="relative w-full h-[300px]">
          <img src={image} alt={title} className="w-[200px] h-[300px] object-contain" />
            {link === "" ? null: <div className="absolute inset-0 flex justify-end -mx-8 -my-5 card-img_hover">
                <div
                  onClick={() => window.open(link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            }
        </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ProjectDetail = ({project}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-left text-[17px] max-w-7xl leading-[30px]"
      >
        {project.description}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {project.images.map((image, index) => (
          <ServiceCard key={image.title} index={index} {...image} />
        ))}
      </div>
    </>
  );
};

export default ProjectDetail;
