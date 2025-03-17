import { useState } from "react"
import { useNavigate } from "react-router";
import '../style/Login.css'
import { login } from "../main";

type TypeLoginData = {
  login: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState<TypeLoginData>({ login: "", password: "" });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login(data);
      console.log(response);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }
  console.log(data);
  
  return (
    <div className='login'>
    <form className="loing__form">
      <h2 className="login__title">LOGIN</h2>
      <Input data={data} setData={setData} type="login" placeholder="Login"/>
      <Input data={data} setData={setData} type="password" placeholder="Password"/>
      <button onClick={handleLogin} className="button">GO TO ADMIN</button>
    </form>
    </div>
  )
}

type TypeInputProps = {
  data: TypeLoginData;
  setData: React.Dispatch<React.SetStateAction<TypeLoginData>>;
  type: keyof TypeLoginData;
  placeholder: string;
}

const Input = (props: TypeInputProps) => {
  return (
    <input value={props.data[props.type]} onChange={(e) => props.setData((prev: TypeLoginData) => ({...prev, [props.type]: e.target.value}))} type={props.type} placeholder={props.placeholder} className="input"/>
  )
}

export default Login