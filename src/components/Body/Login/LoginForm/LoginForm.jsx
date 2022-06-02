
import s from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { minLength } from '../../../../utils/validators/validators';

const LoginForm = (props) => {
   // debugger
   return (
      <div>
         <form className={s.form}>
            <div>
               <div className={s.block}>
                  <div className={s.name}>Почта:</div>
                  <Field component={'input'} name={'email'} type={'text'} />
               </div>
               <div className={s.block}>
                  <div className={s.name}>Пароль:</div>
                  <Field component={'input'} name={'password'} type={'password'}  validate={minLength}/>
               </div>
            </div>


            <div className={s.buttonBlock}>
               <button onClick={props.handleSubmit}>Авторизоваться</button>
            </div>
            
         </form>
         <div className={s.error}>{props.error}</div>
         
      </div>
   )
}



const LoginFormContainer = reduxForm({
   form: 'login',
})(LoginForm)

export default LoginFormContainer;
