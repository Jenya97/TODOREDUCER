

const reducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD':
            return[
               ...state,
               {
                   id:Date.now(),
                   task:action.payload,
                   checked:false
               }
            ]
        case 'DELETE':
          return  state.filter(i=>i.id!==action.payload)
        case "CHECKING":
            return state.map(i=>i.id===action.payload ? {...i, checked:!i.checked } : i);
            default:
                return state
    }
}

export default reducer;