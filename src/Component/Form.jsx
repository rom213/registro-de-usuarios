import React from "react";
import { useForm } from "react-hook-form";
import './form.css'

const Form = ({setusuario,newuser}) => {
  const {register,handleSubmit,reset}= useForm()

  const sumit=data=>{
    newuser(data)
    reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:''
    })

  }

  return (
     
      <div>
        <br />
        <form className="sec3" onSubmit={handleSubmit(sumit)}>
        <div>   
          <input className="inp1"  {...register('email')} placeholder='email' type="email" id="email"/>
        </div>
        <div>
          <input className="inp1" {...register('password')} placeholder='password' type="password" id="password" />
        </div>
        <div>
          <input className="inp1" {...register('first_name')} placeholder='first name' type="firstname" id="firstname"/>
        </div>
        <div>
          <input className="inp1"  {...register('last_name')}  placeholder='last name' type="lastname" id="lastname"/>
        </div>
        <div>
          <input className="inp1 inpdata" {...register('birthday')}  placeholder='birthday' type="date" id="birthday"/>
        </div>
        <button className="btn2">Create User</button>
      </form>
      </div>
      
  );
};

export default Form;
