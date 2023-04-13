import { Link } from "react-router-dom";
function Producto({ id, title, price, domain_id, thumbnail, comprar }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumbnail} alt="" />
      <p>{price}</p>
      <p>{domain_id}</p>
      <button onClick={comprar}>Comprar</button>
      <button>
        <Link to={`/producto/${id}`}>Ver Detalle</Link>
      </button>
    </div>
  );
}

export default Producto;
