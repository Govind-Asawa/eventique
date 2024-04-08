import React from "react";

const sizes = {
  s: "text-xl font-extrabold",
  md: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-sm font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
