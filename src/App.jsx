import { useState } from 'react'
import './App.css'

// 원시자료형
// function App() {
//   let [number, setNumber] = useState(0);
//   console.log("number", number);

//   const handler = () => {
//     setNumber(number + 1);
//     console.log(number);
//   }
//   return (
//     <>
//       number : {number}
//       <br />
//       <button onClick={handler}>상태 업데이트!</button>
//     </>
//   )
// }

// 참조자료형
function App2() {
  let [array, setArray] = useState([1,2,3]);
  console.log("rerendering");

  const handler = () => {
    // const newArray = array.slice();
    const newArray = [...array];
    newArray.push(5);
    setArray(newArray);
  };

  return (
    <>
      array : [{array.join(",")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  )
}


// export default App
export default App2
