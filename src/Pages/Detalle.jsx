import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosServices";

function Detalle() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getById(productoId)
      .then((response) => {
        console.log(response);
        setProducto(response);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Cargando ...</div>;
  }

  return (
    <div>
      <h1>{producto.title}</h1>
      <p>$ {producto.price}</p>
      <p>{producto.warranty}</p>
    </div>
  );
}

export default Detalle;
