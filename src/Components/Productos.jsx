import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import { getAll } from "../Services/productosServices";

function Productos() {
  const [compra, setCompra] = useState(false);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Productos");
  const [productos, setProductos] = useState([]);

  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll();
        console.log(response?.results);
        setProductos(response?.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, []);

  const handleClick = () => {
    setTitulo("Productos Modificado");
  };

  const handleClickAgregarProducto = () => {
    setProductos([
      ...productos,
      {
        id: 4,
        title: "iPhone 13",
        price: "$2500",
        category: "Celulares",
      },
    ]);
  };
  const handleComprar = () => {
    setCompra(true);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (compra) {
    return <div>Gracias por su compra!</div>;
  } else {
    return (
      <div className="">
        <h1>{titulo}</h1>
        <button onClick={handleClick}>Cambiar Titulo</button>
        {productos.map((producto) => (
          <Producto {...producto} comprar={handleComprar} />
        ))}
        <button onClick={handleClickAgregarProducto}>Agregar Producto</button>
      </div>
    );
  }
}

export default Productos;
