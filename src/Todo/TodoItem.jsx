import React from 'react'
import { useContext } from 'react'
import Context from '../context'
export default function TodoItem({id,task,checked}) {
    const dispatch=useContext(Context)
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <input type='checkbox' checked={checked} onChange={()=>dispatch({
        type:'CHECKING',
        payload:id
    })}/>
    <p className={checked ? 'complete' : null}>{task}</p>
    <button onClick={()=>dispatch({
        type:'DELETE',
        payload:id
        })}>x</button>
    </div>
  )
}
