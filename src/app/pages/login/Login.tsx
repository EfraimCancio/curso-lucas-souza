import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/pagina-inicial");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length * 100;
  }, [email.length]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  const handleEntrar = useCallback(() => {
    console.log(password);
    console.log(email);
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no e-mail: {emailLength}</p>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>

      <button onClick={handleClick}>Página inicial</button>
    </div>
  );
};
