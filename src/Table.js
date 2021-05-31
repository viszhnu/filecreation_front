import React from "react";
import { Link } from "react-router-dom";
 function Table(props){
     console.log(props.userdata)
let count=1;
   return(
       <>
    <Link to="/createFolder">Create File</Link>
        <table>
         <tbody>
           
             { 
                 props.userdata.map((i)=>{
                    console.log(i);
                    return <tr class={{}}>{i.name}-{i.type}</tr>
                 })
             }
   
         </tbody>
    </table>
    </>
   );
}

export default Table;
