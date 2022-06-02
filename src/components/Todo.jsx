import React from 'react';

function Todo(props){

  return(
    <>
      <div>
        <p>{props.detail}</p>
        {/* <button onClick={() =>
          updateMyArray((names) => names.filter((_, i) => i !== names.length - 1))
        }>Delete</button> */}
      </div>
    </>
  )
}
export default Todo;