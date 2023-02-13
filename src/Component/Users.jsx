import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './users.css'
const Users = ({ user, deleteuser,edituser}) => {

  const { register, handleSubmit, reset } = useForm();
  const [edit, setedit] = useState(true);
  const [key, setkey] = useState(false)
  const [password, setpassword] = useState()

  const handledelate = () => {
    deleteuser(user.id);
  };

  const handledit = e => {
    setkey(true)
    e.preventDefault();
    setedit(true);
  };

  const sumit=data=>{
    edituser(user.id,data)
    setedit(true)
  }

const handlepass=e=>{
    e.preventDefault();
    setpassword(e.target.pass.value);
}

useEffect(() => {
    if (password) {
        if (password===user.password) {
            console.log('roma');
            reset(user)
            setkey(false)
            setpassword(null)
            setedit(false)
        }else{
          setkey(false)
        }
    }
}, [password])

const handlex=()=>{
  setkey(false)
}


  return (
    <div className="sec">
                    {
                key ?
                <div>
                <form  onSubmit={handlepass}>
                    
                    <input  className="contraseña"  placeholder="enter your password" id="pass" type="password" />
                </form>
                <button onClick={handlex} className="btn3 x"><i class='bx bx-user-x bx-md'></i></button>
                </div>
                :
                <div>
      {edit ? (
        <div>
          <strong id={user.first_name}>
            {user.first_name} {user?.last_name}
          </strong>
          <div className="raya"></div>
          <div>
          <div className="opa">Correo:</div>
          <div>{user.email}</div>
          </div>
          <div>
          <div className="raya"></div>
          <div className="opa">cumpleaños:</div>
          <div>{user.birthday}</div>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit(sumit)}>
            <div>
              <input
                {...register("first_name")}
                type="firstname"
                id="firstname"
                placeholder="first name"
                className="edit"
              />
            </div>
            <div>
              <input className="edit" {...register("last_name")} placeholder='lastname' type="lastname" id="lastname" />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input className="edit" {...register("email")} placeholder='Email' type="email" id="email" />
            </div>
            <div>
              <label htmlFor="birthday">birthday</label><br />
              <input className="edit" {...register("birthday")} placeholder='date' type="date" id="birthday" />
            </div>
            <button className="btn3 save"><i class='bx bxs-save bx-md'></i></button>
          </form>
        </div>
      )}

      <div>{
        edit ?
        <div className="botones">
            <button className="btn3" onClick={handledit}><i class='bx bx-edit bx-md'></i></button>
            <button className="btn3" onClick={handledelate}><i class='bx bxs-trash bx-md'></i></button>
        </div> :
          <button className="btn3 trash" onClick={handledelate}><i class='bx bx-trash bx-md'></i></button>
        }
      </div>
      </div>
            }
    </div>
  );
};

export default Users;
