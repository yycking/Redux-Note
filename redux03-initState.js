const { createStore } = Redux

const initState = {紅:1, 綠:0, 藍:0}

const reducer = (state = {紅:0, 綠:0, 藍:0}, action) => {
  switch (action.type){
    case '紅': return {...state, 紅:action.值}
    case '綠': return {...state, 綠:action.值}
    case '藍': return {...state, 藍:action.值}
    default: return state
  }
}

// 依照reducer, initState建立store
const store = createStore(reducer, initState)
console.log(JSON.stringify(store.getState()))