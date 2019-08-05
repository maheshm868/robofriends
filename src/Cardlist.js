import React from 'react';
import  Card from './Card';

const Cardlist = function({robodetails}){
    return(
        <div>
        {
            robodetails.map(function(v,i){
                return <Card key={i} name={v.name} id={v.id} email={v.email}/>
            })
        }
        </div>
    );
}
// const Cardlist =({arrRobots}) =>{
// return (
//     <div>
//         {
//             arrRobots.map((user,i)=>{
//                 return(
//                     <Card 
//                         key={i} 
//                         id={arrRobots[i].id} 
//                         name={arrRobots[i].name}
//                         email={arrRobots[i].email}
//                     />
//                 );
//             })
//         }
//     </div>
//     );
// }

export default Cardlist;