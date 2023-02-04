import React from "react";

const Refercheckout = (props) => {
  const { ref } = props.referencia;
  return (
    <div className="center">
      <h1>Referencia de su compra</h1>
      <p>{ref}</p>
    </div>
  );
};

export default Refercheckout;
