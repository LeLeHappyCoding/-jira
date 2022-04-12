import React, { useEffect, useState } from "react";

export const Test = () => {
  const [num, setNum] = useState(0);

  const add = () => setNum(num + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("num in setinterval", num);
    }, 1000);
    return () => clearInterval(timer);
  }, [num]);

  useEffect(() => {
    return () => {
      console.log(num);
    };
  }, []);

  return (
    <div>
      <button onClick={add}>add</button>
      <p>number:{num}</p>
    </div>
  );
};
