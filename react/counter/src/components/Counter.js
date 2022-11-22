
import "../css/Counter.css"

const Counter = (props) => {

  
  
    return (
        <div className="counter">
            <button onClick={()=>{props.clickMe(0)}}>-</button>
            <p>{props.counter}</p>
            <button onClick={()=>{props.clickMe(1)}}>+</button>
        </div>
    )
}

export default Counter;