import React, { MouseEventHandler } from "react";
interface svgProps {
  id?: string;
  click?: MouseEventHandler;
  classlist?: string;
  view?: string;
  path?: string;
  pathlist?: string[];
  style?: React.CSSProperties;
}
import { motion } from "framer-motion";

export default function Svg(props: svgProps) {
  return (
    <svg
      id={props.id}
      onClick={props.click}
      className={props.classlist}
      viewBox={props.view}
      style={props.style}
    >
      <g>
        {props.path && (
          <motion.path
            d={props.path}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 6, ease: "easeInOut" },
              // fill: { duration: 6, ease: [1, 0, 0.8, 1] },
            }}
          ></motion.path>
        )}
      </g>
    </svg>
  );
}
