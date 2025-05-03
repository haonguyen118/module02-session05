import React, { useReducer } from 'react'

export default function Ex04() {
    function handleReducer(state,action) {
        switch(action.type){
            case"changeName":
            return {...state,name:action.payload}
            case"changeEmail":
            return {...state,email:action.payload}
            }
        }
        

    
    const [formAdd, dispatch] =useReducer(handleReducer,{name:"",email:""});
    const handleChangeName = (e)=>{
        dispatch({type:"changeName",payload: e.target.value});
    }
    const handleChangeEmail = (e)=>{
        dispatch({type:"changeEmail",payload: e.target.value});

    }

  return (
   
        <div>
            <label >Name
                <br />
                <input id="name" type="text" placeholder='name' onChange={handleChangeName} />
            </label>
            <br />
            <label >Email
                <br />
                <input id="email" type="email" placeholder='Email' onChange={handleChangeEmail} />
            </label>
            <br />
            <button onClick={()=>console.log(formAdd)}
             type ="submit">Gui</button>
      </div>
  
  )
}
