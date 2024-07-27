import {useMemo, useState, useReducer, useEffect} from 'react';
import useCounter from './hook';
import logo from './logo.svg';
import './App.css';
// function reducer (state,action){
//   switch(action.type){
//     case 'increment': return {count:state.count + 1, revcount:state.revcount -1}
    
//     case 'decrement': return {count : state.count -1, revcount :state.revcount +1}
    
//     default:return state
//   }

// }
// function Childcomp(props){
//   return <div>
//     <p>We are using props</p>
//     <p> The name is {props.name}</p>
//     <p>The Occupation is {props.occ}</p>
//   </div>
// }
function App() {
  const {count, increment, decrement} = useCounter(0)
  // function handlesubmiti(){
  //   dispatch({type:'increment'})
  // }
  // function handlesubmitd(){
  //   dispatch({type:'decrement'})
  // }
  // let [state, dispatch] = useReducer(reducer, {count:0, revcount:0})
  // useEffect(()=>{
  //   console.log(state.count +'  '+ state.revcount)
  // },[state.count,state.revcount])
  return (
    <div className="App">
    
{/* {
  <Childcomp name ="Saif" occ ="Developer"/>
       
      <input type='button' value='Increment' onClick={handlesubmiti}></input>
      <input type='button' value='Decrement' onClick={handlesubmitd}></input> } */}
      <p> Count : {count}</p>
      <input type="button" value="Increment" onClick={increment} />
      <input type="button" value="Decrement" onClick={decrement} /> 
        </div>
  );
}

export default App;
