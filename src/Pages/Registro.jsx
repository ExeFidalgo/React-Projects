import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrarse = (event) => {
    console.log("registrarse", event.target);
    console.log(nombre, apellido, email, password);
    event.preventDefault();
  };
 
  
  return (
    <div>
      
      <form onSubmit={registrarse}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
