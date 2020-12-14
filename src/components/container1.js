import React from 'react'

const container = document.getElementById("container");
let div;

function mostrarIteracion() {
for(let i=0 ; i < 5  ;i++) {
   div.document.getElementById('div')
   div.onclick = function () {
       alert("this is : " + i);
   }
   container.appendChild(div);
}}

export default function Container1 ()  {
 return (
   <div>

    mostrarIteracion();    

   </div>
    
    
 )

}
