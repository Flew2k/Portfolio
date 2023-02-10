import React, { SVGProps } from "react";

export const InboxIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20} cy={20} r={20} fill="#fff" />
      <path
        d="M28 29.668H12a2 2 0 0 1-2-2V16.717a2.032 2.032 0 0 1 .971-1.632l8-4.8a2 2 0 0 1 2.057 0l8 4.8c.601.363.97 1.013.972 1.715v10.868a2 2 0 0 1-2 2ZM12 17.536v10.132h16V17.536l-8 5.333-8-5.333ZM20 12l-6.684 4.01L20 20.466l6.683-4.456L20 12Z"
        fill="#F1875E"
      />
    </svg>
  );
};
