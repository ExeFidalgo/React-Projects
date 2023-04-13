import React, { useState } from "react";
function Contador() {
  const [cantidad, setCantidad] = useState(0);

  const decrementar = () => {
    setCantidad(cantidad - 1);
  };

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <>
      <button onClick={decrementar}>Decrementar</button>
      <div>{cantidad}</div>
      <button onClick={incrementar}>Incrementar</button>
    </>
  );
}

export default Contador;
