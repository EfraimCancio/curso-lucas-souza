import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/pagina-inicial");
  };
  return (
    <div>
      Loguin
      <button onClick={handleClick}>Página inicial</button>
    </div>
  );
};
