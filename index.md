# Redux 筆記

## createStore
```javascript
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
```

## dispatch
```javascript
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
```

## initState
```javascript
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
```

## combineReducers
```javascript
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
```

## compose
```javascript
const { createStore, combineReducers, compose } = Redux

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

// 將action串起來
const 串 = compose(
  () => store.dispatch({type:'紅', 值:0.5}),
  () => store.dispatch({type:'綠', 值:0.1})
)
  
串()
console.log(JSON.stringify(store.getState()))
```

## bindActionCreators
```javascript
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
```
