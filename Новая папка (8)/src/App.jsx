import React, { useState } from 'react'

const App = () => {

  const [data, setData]= useState([])
    fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(json => setData(json))
  return (
 <div>
  
    {
      data.map(pst =>{
        return (
          <>
         <div className="container">
                    <p> {pst.id}</p>
            <img src={pst.images}alt="" className='images' />
            <h1>{pst.title}</h1>
            <h2>{pst.price}</h2>
                       </div>
          </>
        )
      })
    }
  
 </div>
    
  
    
  )
}

export default App