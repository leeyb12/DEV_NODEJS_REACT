import { useState } from "react"

function useCounter(init){
    const [count, setCount] = useState(init)
    const increaseCount = () => setCount(count + 1)
    const decreaseCount = () => setCount(count - 1)
    return [count, increaseCount, decreaseCount]
}

export default useCounter 