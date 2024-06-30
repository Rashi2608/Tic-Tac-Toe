import React from 'react'

const Box = (props) => {
  return (
    <div onClick={props.onClick}
       style={{
        background:'#e6e6fa',
        display:'flex',
        height:'100px',
        border:'1px solid',
        width:100,
        justifyContent:'center',
        alignItems:'center'}}  className='square'>
      <h4>{props.value}</h4>
    </div>
  )
}

export default Box;
