const { createStore, bindActionCreators } = Redux

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

// 以下①②③都是執行action的方法

// 讓store執行action
const actions = {
  紅: () => ({type:'紅', 值:0.5})
}
store.dispatch(actions.紅()) // ①
console.log(JSON.stringify(store.getState()))

// 讓store.dispatch成參數
const mapDispatchToProps1 = (dispatch) => {
  return {
    綠: () => dispatch({type:'綠', 值:0.5})
  }
}

mapDispatchToProps1(store.dispatch).綠() //②
console.log(JSON.stringify(store.getState()))

// 讓dispatch批量自動填入
const mapDispatchToProps2 = (dispatch) => {
  return bindActionCreators({
    藍: () => ({type:'藍', 值:0.5})
  },dispatch);
}

mapDispatchToProps2(store.dispatch).藍() //③
console.log(JSON.stringify(store.getState()))