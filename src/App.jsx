import { useEffect, useState } from 'react'
import './App.css'
import './Component/form.css'
import './Component/users.css'
import axios from 'axios'
import Form from './Component/Form'
import Users from './Component/Users'


function App() {
  const [Usuarios, setUsuarios] = useState()
  const [create, setcreate] = useState(true)
  const [usuario, setusuario] = useState()
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );



  const getallusers=()=>{
    const url='https://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res=>{
        setcreate(true)
        setUsuarios(res.data)})
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    getallusers()
  }, [])


  const newuser=(data)=>{
    const url='https://users-crud.academlo.tech/users/'
    axios.post(url,data)
      .then(res=>{
        console.log(res.data)
        getallusers()
      })
      .catch(err=>console.log(err))
  }
  const deleteuser=id=>{
    const url=`https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res=>{
      console.log('borrado exitoso')
      getallusers()
      })
      .catch(err=>console.log(err))
  }

  const edituser=(id,data)=>{
    const url=`https://users-crud.academlo.tech/users/${id}/`
    axios.patch(url,data)
      .then(res=>{
      console.log('Usuario editado Exitosamente')
      getallusers()
      })
      .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };
  

  return (
    <div className="App">
      <div className='sec1'>
        <h2>USUARIOS</h2>
        <button className='btn1' onClick={()=>setcreate(!create)}>create new<br /> User</button>
      </div>
      <label className='dar'>
        {
          checked ?
          <b>Noche</b>:
          <b>Dia</b>
        }
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </label>
      <br />

      <div>
        {
          create ?
          <div></div>
          :
          <div className='sec2'>
          <Form setusuario={setusuario}
          newuser={newuser}/>
          </div>
        }
      </div>
      <div className='sec4'>
      {
        Usuarios?.map(user=>{
          return  <div><Users user={user}
          key={user.id}
          deleteuser={deleteuser}
          edituser={edituser}/>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default App
