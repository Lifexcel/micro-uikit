import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M2.846 5.887a.928.928 0 00-.303-.784l-2.24-2.7V2h6.958l5.378 11.795L17.367 2H24v.403L22.084 4.24a.561.561 0 00-.213.538v13.498a.56.56 0 00.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V7.321l-5.389 13.688h-.728L4.28 7.321v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V5.887z" />
    </Svg>
  );
};

export default Icon;