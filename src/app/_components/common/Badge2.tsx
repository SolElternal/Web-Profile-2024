import React from "react";

type Props = {};

const Badge2 = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-blue-500 text-white px-2 py-1 text-xs rounded">
      {props.children}
    </div>
  );
};

export default Badge2;
