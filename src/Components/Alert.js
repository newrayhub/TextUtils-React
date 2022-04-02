import React from 'react'

export default function Alert(props) {

    const capitilize = (word)=>{
        // const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
{/* // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> */}
<strong>{capitilize(props.alert.type)}</strong> {props.alert.msg}

</div>
  )
}


