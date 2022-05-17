// import React,{useState} from 'react'

// function Classcomponent() {
//     const [isTrue,setIsTrue]=useState(false);
//   return (
//     <div className='container'>
//         <button className='btn' onClick={()=>{isTrue ? setIsTrue(false): setIsTrue(true)}}>To see styling in class component</button>
//         {isTrue&& <div className='box'>
//             <h1>This is created using class component</h1>
//             <p>This done using external css</p>
//             <p style={{color:'red'}}>This is done using inline css</p>
//         </div> }
//     </div>

//   )
// }

// export default Classcomponent
import React, { Component } from 'react'

class Classcomponent extends Component {
  constructor(){
    super();
    this.state={
      isTrue:false
    }
    this.getBox=this.getBox.bind(this);
  }
  getBox(){
    this.state.isTrue ? this.setState({isTrue:false}): this.setState({isTrue:true})
  }
  render() {
    return (
      <div className='container'>
          <button className='btn' onClick={this.getBox}>To see styling in class component</button>
          {this.state.isTrue&& <div className='box'>
              <h1>This is created using class component</h1>
              <p>This done using external css</p>
              <p style={{color:'red'}}>This is done using inline css</p>
          </div> }
      </div>
    )
  }
}

export default Classcomponent