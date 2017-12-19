const { createStore } = Redux

const reducer = (state = {紅:0, 綠:0, 藍:0}, action) => {
  switch (action.type){
    case '紅': return {...state, 紅:action.值}
    case '綠': return {...state, 綠:action.值}
    case '藍': return {...state, 藍:action.值}
    default: return state
  }
}

// 依照reducer建立store
const store = createStore(reducer)
console.log(JSON.stringify(store.getState()))

// 讓store執行action
store.dispatch({type:'紅', 值:0.5})
console.log(JSON.stringify(store.getState()))