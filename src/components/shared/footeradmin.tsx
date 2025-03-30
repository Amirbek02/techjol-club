import React from "react";

interface Props {
  className?: string;
}

export const FooterAdmine: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div
        style={{
          backgroundColor: "#031634",
        }}
        className="p-5 flex items-center justify-center text-amber-400"
      >
        <a href="">Copyright © 2024</a>
      </div>
    </div>
  );
};
