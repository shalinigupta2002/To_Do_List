import { LuFile } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
    console.log("Data passed to Cards component:", data); // Add this line for debugging

    // Ensure data is defined before accessing its properties
    if (!data) {
        return <div>Data is undefined</div>;
    }

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="relative w-60 h-72 rounded-[20px] bg-zinc-900/90 px-8 py-10 overflow-hidden text-white"
        >
            <LuFile />
            <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.closeOrAvailable ? <RiCloseCircleLine /> : <FaDownload size=".7em" color="#fff" />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full h-10 py-4 flex items-center justify-center ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                        <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Cards;
