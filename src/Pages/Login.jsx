import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = (event) => {
    console.log("iniciarSesion", event.target);
    console.log(email, password);
    event.preventDefault();
  };
  
  return (
    <div>
      
      <form onSubmit={iniciarSesion}>
       
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
        <button type="submit">Iniciar Sesión </button>
      </form>
    </div>
  );
}

export default Login;
