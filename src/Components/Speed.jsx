import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Speed = () => {
  const typedElement = useRef(null); // Reference for the span element

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        " Full Stack Developer ......"
      ],
       
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup to avoid memory leaks
  }, []);

  return <span className="text" ref={typedElement}></span>;
};

export default Speed;