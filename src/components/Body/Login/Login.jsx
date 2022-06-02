
import s from './Login.module.css';
import LoginFormContainer from './LoginForm/LoginForm';


const Login = (props) => {

   

   return (
      <div>
         <LoginFormContainer onSubmit={props.onSubmit}/>
      </div>
   )
}






export default Login;