import React from "react";

const sizes = {
  xs: "text-[11px] font-thin",
  lg: "text-lg font-normal",
  s: "text-xs font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-notosans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
