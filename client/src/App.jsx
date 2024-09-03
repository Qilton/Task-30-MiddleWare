import { useState } from 'react' 
import './App.css'
import { useForm } from "react-hook-form"
 
 

function App() { 
  const {
    register,
    handleSubmit,
    setError,    
    formState: { errors, isSubmitting },
  } = useForm();

  

  const onSubmit = async (data) => {
    
    let r = await fetch("https://task-30-middleware-server.vercel.app/submit", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  
  }

  return (
    <> 
  
       <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username")}/>
          <br />
          <input placeholder='password'  {...register("password")}/>
         
          <br />
          <input type="submit" value="Submit" />
        </form>
       </div>
    </>
  )
}

export default App