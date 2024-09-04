import { button } from "@material-tailwind/react";
import { useEffect } from "react";

export default function useOnClickOutside(ref1, ref2, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref1.current || ref1.current.contains(event.target)) {
            return;
          }
          if(ref1.current && !ref1.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target) ){
              handler(event);
          }
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        document.addEventListener("scroll",listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
          document.removeEventListener("scroll",listener);
        };
      },
      [ref1,ref2, handler]
    );
  }