import './App.css';
import {useState,useReducer,useEffect} from 'react';
import reducer from './reducer';
import Todo from './Todo/Todo';
import Context from './context';
function App() {
  const [val,setVal]=useState('');
  const [todo,dispatch]=useReducer(reducer,JSON.parse(localStorage.getItem('tasks')));

function add(){
  if(val!==''){
    dispatch({
      type:'ADD',
      payload:val
    })
    setVal('')
  }

}
if(!localStorage.hasOwnProperty('tasks')){
localStorage.setItem('tasks',JSON.stringify([]))
}
useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(todo))
},[todo])
  return (
    <Context.Provider value={dispatch}>
    <div className="App">
     <input type='text' value={val}
      onChange={(e)=>setVal(e.target.value)}
      onKeyPress={(e)=>{
       if(e.key==='Enter'){
         add()
       }
       }}/>
     <button onClick={add} >Add Todo</button>
     <Todo todo={todo}/>
    </div>
    </Context.Provider>
  );
}

export default App;
