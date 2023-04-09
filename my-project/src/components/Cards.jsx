import details from "../data/cardDetails";
import { motion } from "framer-motion";
const Cards = () => {
  return (
    <div>
      <div className="font-dmSans text-5xl text-lightRed mt-24 mb-10 ">
        Some Lost Recpies
      </div>
      <motion.div
        className="grid grid-cols-3 grid-gap-3 justify-between w-lg "
      >
        {details.map((detail) => {
          return (
            <div className="m-10  rounded-lg  shadow-lg text-lightPeach text-xl text-bold bg-lightRed">
              <img
                src={detail.img}
                className="rounded-t-lg w-full h-48 object-cover"
              ></img>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {detail.name}
                </h5>
                <p className="mb-4 text-base text-lightPeach">
                  {detail.description}
                </p>
              </div>
              <div>
                <button className=" pt-2 py-2 px-4 text-lg rounded-full bg-lightPeach text-lightRed mb-8 hover:opacity-70">
                    view recipe
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cards;
