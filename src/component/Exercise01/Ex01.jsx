import React, { useState } from 'react'

export default function Ex01() {
    const [bgColor,setBgColor] = useState();
    const colors =["blue","green","red","pink"];
    function handleChangeColor() {
        const indexColor = Math.floor(Math.random() * colors.length)
        setBgColor(colors[indexColor])
    }
  return (
    <div>
        
            <>
            <div style={{background:bgColor, width:100, height:100, border:"1px solid black"}}></div>
            <button onClick={()=>handleChangeColor()}>Doi mau</button>
            </>
            
        

    </div>
  )
}
