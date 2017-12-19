const { createStore, combineReducers } = Redux

const 顏色 = (state = {紅:0, 綠:0, 藍:0}, action) => {
  switch (action.type){
    case '紅': return {...state, 紅:action.值}
    case '綠': return {...state, 綠:action.值}
    case '藍': return {...state, 藍:action.值}
    default: return state
  }
}

const 透明度 = (state = 1.0, action) => {
  switch (action.type){
    case '加強': return state + 0.1
    case '減弱': return state - 0.1
    case '重設': return action.透明
    default: return state
  }
}

// 將多個reducer合成一個root reducer
const reducer = combineReducers({顏色, 透明度})

// 依照reducer建立store
const store = createStore(reducer)
console.log(JSON.stringify(store.getState()))