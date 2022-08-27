import React from 'react'

export default function Todo(props) {
  return (

<>
     <ul>
          {props.todo.map(item =>{
            return <li>{item}</li>
          })}
     </ul>
</>

  )
}
