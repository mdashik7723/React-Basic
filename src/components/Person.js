import React, { Component } from 'react';

// function Person(){
//     return(
//     <div>
//       <h3>Khub Moja</h3>
//     </div>
//     );
// }

//
let Person = (props) => {
   return (
       <div>
           <h3> Name: {props.name} And Age: {props.age} Years</h3>
           <h4> Some Info: {props.children}</h4>
       </div>
   );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h3> Name: {this.props.name} And Age: {this.props.age} Years</h3>
//                 <h4> Some Info: {this.props.children}</h4>
//             </div>
//         );
//     }
// }

export default Person;