import React from "react";

interface LineBreakProps {
  marginTop: number;
  width: number;
}

const LineBreak: React.FC<LineBreakProps> = ({ marginTop, width }) => {
  return (
    <hr
      style={{
        width: `${width}%`,
        borderTop: "3px solid black",
        marginTop: `${marginTop}px`,
      }}
    />
  );
};

export default LineBreak;
