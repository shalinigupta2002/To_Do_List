import { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "lorem ipsum dolor sit amet ",
            filesize: ".9mb",
            closeOrAvailable: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
        },
        {
            desc: "lorem ipsum dolor sit amet ",
            filesize: ".9mb",
            closeOrAvailable: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "blue" },
        },
        {
            desc: "lorem ipsum dolor sit amet ",
            filesize: ".9mb",
            closeOrAvailable: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
        },
        {
            desc: "lorem ipsum dolor sit amet ",
            filesize: ".9mb",
            closeOrAvailable: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "blue" },
        },
    ];

    return (
        <div ref={ref} className="fixed top-0 flex gap-10 flex-wrap flex-shrink-0 left-0 z-[3] w-full h-full p-5">
            {data.map((item, index) => (
                <Cards key={index} data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;

