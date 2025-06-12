import { useEffect, useState } from "react"
import "./Ex08.css"
  
const TodoList = () => { 
    const [indata, setIndata] = useState("") 
    const [arr, setArr] = useState([])

    useEffect(() => { 
      const stored = localStorage.getItem("todos") 
      if (stored) setArr(JSON.parse(stored)) }, [])

    useEffect(() => { 
      localStorage.setItem("todos", JSON.stringify(arr)) }, [arr]) 
      
    const handleInput = e => { setIndata(e.target.value) } 

    const handleAdd = () => { 
        if (indata.trim() !== "") { 
            setArr([...arr, { text: indata, done: false }]) 
            setIndata("") 
        } 
    }

    const handleKeyPress = e => { 
        if (e.key === "Enter") { 
            handleAdd() 
        } 
    }

    const handleDelete = index => { 
        setArr(arr.filter((_, i) => i !== index)) 
    }

    const toggleDone = index => { 
        setArr( 
            arr.map((item, i) => 
                i === index ? { ...item, done: !item.done } : item 
            ) 
        ) 
    }

    return ( 
        <div className={"container"}> 
            <h1>8. Array를 이용한 ToDoList</h1> 
            <label htmlFor="inin">배열요소 입력 : </label> 
            <input 
                type="text" 
                id="inin" 
                onChange={handleInput} 
                onKeyDown={handleKeyPress} 
                value={indata} 
                className={"input"} 
            /> 
            <button onClick={handleAdd} className={"button"}>추가</button>
            <hr /> 
            <div> 
                {arr.map((item, i) => ( 
                    <div key={i} className={"todoitem"}> 
                    <input 
                        type="checkbox" 
                        checked={item.done} 
                        onChange={() => toggleDone(i)} 
                    /> 
                    <span
                        className={`todotext ${item.done ? "done" : ""}`}
                    >
                            {`${i+1}: ${item.text}`}
                    </span>
                <button onClick={() => handleDelete(i)} className={"deleteButton"} disabled={!(arr.length > 0)}>삭제</button>
                </div> 
              ))} 
            </div> 
        </div> 
    ) 
}

export default TodoList
// const TodoList = () => {
//     const [indata, setIndata] = useState("")
//     const [arr, setArr] = useState([])

//     const handleInput = e => {
//         setIndata(e.target.value)
//     }
//     const handleAdd = () => {
//         if (indata.trim() !== "") {
//           setArr([...arr, { text: indata, done: false }])
//           setIndata("")
//         }
//     }

//     useEffect(() => {
//         const stored = localStorage.getItem("todos")
//         if (stored) setArr(JSON.parse(stored))
//     }, [])

//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(arr))
//     }, [arr])

//     const handleKeyPress = e => {
//         if (e.key === "Enter") {
//             handleAdd()
//         }
//     }

//     const handleDelete = index => {
//         setArr(arr.filter((_, i) => i !== index))
//     }

//     const toggleDone = index => {
//         setArr(
//             arr.map((v, i) => 
//             i === index ? {...v, done: !v.done } : v) 
//         )
//     }
//     return (
//         <>
//            <h1>8. 어레이를 이용한 ToDoList</h1>
//            <label htmlFor="inin">배열요소 입력 : </label>
//            <input type="text" id="inin" onChange={handleInput} onKeyDown={handleKeyPress} value={indata} />{"  "}
//            <button onClick={handleAdd}>추가</button>
//            <button disabled={!(arr.length > 0)}>삭제</button>
//            <hr />
//            {/* <div>{arr}</div> */}
//            {arr.map((v, i) => {
//                return (
//                   <div key={i}>{`${i}: ${v}`}</div>
//                )
//            })}
//         </>
//     )
// }
// export default TodoList