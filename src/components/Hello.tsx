import React from "react";

type Helloprop = {
  name: string;
};

const Hello: React.FC<Helloprop> = ({ name }) => {
  return (
    <>
      <div>Hello {name}</div>
    </>
  );
};

export default Hello;
