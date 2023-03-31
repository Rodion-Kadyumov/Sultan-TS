import React, { FC, useState } from "react";
import { useSelector } from "react-redux";



function Counts () {
  const card = useSelector((state: any ) => state.card.card);
  const [counts, setCounts] = useState<number>(1);

  const handlePlus = () =>  { 
    setCounts(counts + 1)
  }
  const handleMinus = () => {
    setCounts(counts - 1)
  }

  return (
    <div className="counts__btn">
      <p>{card.price * counts} ₸</p>
      <button onClick={handleMinus} className="counts">-</button>
      <div className="count">{counts}</div>
      <button onClick={handlePlus} className="counts">+</button>
    </div>
  );
}

export default Counts;