import { useState, useEffect } from "react";
const BackToTheTop = () => {
    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      setScrollPosition(document.body.scrollTop);
    };
    const top = {
      display: "none",
    };
    const scroll = {
      display:"block",
    };
    useEffect(() => {
        document.addEventListener("scroll", handleScroll, true);
    }, [])
    return ( 
        <div style={scrollPosition > 0 ? scroll : top}>
            <div
            className="scrollTop"
            onClick={() => scrollTop()}
            >
            <span>^</span>
            </div>
        </div>
     );
}
 
export default BackToTheTop;