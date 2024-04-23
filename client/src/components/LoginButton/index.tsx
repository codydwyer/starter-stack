import { useNavigate } from 'react-router-dom';
import './style.scss';

export interface ILoginButtonProps {}

const LoginButton = ({}: ILoginButtonProps) => {
  const navigate = useNavigate();
  const navHandler = () => {
    navigate(`/login/`);
  };
  return (
    <button className="login-btn" onClick={navHandler}>
      Login
    </button>
  );
};

export default LoginButton;
