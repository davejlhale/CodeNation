
import './App.css';
import buttons from './components/buttonArray'
import parse from 'html-react-parser'
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [answer, setAnswer] = useState("0");
  const [runningSum, setRunningSum] = useState("");

  const parseInput = (funcs) => {
    console.log("clicked", funcs)
    let t = "";
    switch (funcs) {
      case "AC":
        setAnswer(0);
        setRunningSum("");
        t = "";
        break;
      case "=":
        setRunningSum(runningSum );
        setAnswer(evaluate(runningSum))
        break;
        case "ANS" :
          setRunningSum(answer);
          break;
          
// case "sin":
//   case"hyp":
//   case"cos":
//   case"tan":



      case "x": funcs="*"   
      case "(" :
            case")" : 
      case "+":
      case "-":
      case "/":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0": setRunningSum(runningSum + funcs);
    }







  }


  return (
    <div className="calculator">casio
      <Display runningSum={runningSum} answer={answer} />
      <Buttons buttons={buttons} click={parseInput}></Buttons>
    </div>
  );
}




const Display = (props) => {
  return (

    <div id="display">
      <RunningSum runningSum={props.runningSum} />
      <Answer answer={props.answer} />
    </div>
  )
}

const Buttons = (props) => {
  let btns = props.buttons.sort((a, b) => parseFloat(a.keyOrder) - parseFloat(b.keyOrder));
  return (
    <div className="buttons">
      {btns.map((text, index) => {

        return <Button key={index} button={btns[index]} click={props.click} />

      })}
    </div>
  )
}

const Button = (props) => {
  return (
    <div id={props.button.keyStyle} onClick={() => { props.click(props.button.text) }}>
      {parse(props.button.text)}
    </div>
  )
}
const RunningSum = (props) => {
  return (
    <div className="running-sum">
      <p>{props.runningSum}</p>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="answer">
      <p>{props.answer}</p>
    </div>
  )
}
export default App;
