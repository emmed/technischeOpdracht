import React from 'react'
// import React { useState} from 'react' 

const Saved = (props) => {
 

    return (
   <div>
       <button onClick={props.doWhatever}>{props.title}</button>
   </div>
    )
}

export default Saved
