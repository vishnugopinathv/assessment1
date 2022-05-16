import React,{useState} from 'react'

function Functional() {
    const [isTrue,setIsTrue]=useState(false);
  return (
    <div className='container'>
        <button className='btn' onClick={()=>{isTrue ? setIsTrue(false): setIsTrue(true)}}>To see styling in functional component</button>
        {isTrue&& <div className='box'>
            <h1>This is created using functional component</h1>
            <p>This done using external css</p>
            <p style={{color:'red'}}>This is done using inline css</p>
        </div> }
    </div>
  )
}

export default Functional