// import logo from './mobile';
import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

const questionList = [
  {
    tittle: "What is HTML",
    option: ["WHat is the lange", "What is HTML", "WHat Is htn", "What Is hrn"],
    correctAnswer: "WHat is the lange"
  },
  {
    tittle: "What is Css",
    option: ["WHat is the ok Answer", "What is Css", "WHat Is Cs", "What Is cs"],
    correctAnswer: "WHat is the ok Answer"
  },
  {
    tittle: "What is js",
    option: ["WHat is the ok js", "What is js", "WHat Is js", "What Is js"],
    correctAnswer: "WHat is the ok js"
  },
  {
    tittle: "What is react",
    option: ["WHat is the ok React", "What is react", "WHat Is js", "What Is js"],
    correctAnswer: "WHat is the ok js"
  }
]

function App() {
  const [questionNo, setQuestionNO] = useState(0)
  const [score , setScore] = useState(0)
  // const [check , setCheck] = useState(false)
  const [getValue , setGetValue] = useState('')
  
  let data = score
  const nextQuestion = () => {
    let templist = questionNo
     setQuestionNO(++templist)
     let temValue = getValue
    setGetValue(temValue)    
      if(getValue === ''){
      Swal.fire({
        icon: 'question',
        title: 'Please Select Any Option!!',        
      })      
      setQuestionNO(--templist)    
    }
    else if(getValue === result){
    setScore(++data) 
    }  
  }
  const submitQuestion = () => {
     let temValue = getValue
    setGetValue(temValue)  
     if(getValue == result){
      setScore(++data)
     }
       if (data >= 2){
        Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: "Pass" + data + " Out Of " + questionList.length,
      })   
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops ',
        text: "Fail" + data + " Out Of " + questionList.length,
      })
    }       
  }  
  

  const playAgainst = () => { 
    window.location.reload()
  }
  const option = questionList[questionNo].option
  const result = questionList[questionNo].correctAnswer
 
  return (
    <div> 
      <h1 className='quiz' >Quiz App</h1>
    <div className="App">
      <div className='Inp' >
      
        <h4>Ques:{questionNo + 1 } {questionList[questionNo].tittle} </h4>        
        { questionNo <questionList.length  &&  option.map((item , index)=>{   
        return <div key={index} className='row' >
         <label htmlFor={index} >
         <input  onChange={(e)=>setGetValue(e.target.value)} type="radio" name='qu1' id={index} value={item}  />{item}</label>
        </div>
        })
       }
        <p> Question  {questionNo +1} / {questionList.length} {questionNo === questionList.length - 1 && <button className='btnn' onClick={playAgainst} > Play Against </button>} </p>
        <br />
        {questionNo < questionList.length - 1 && <button onClick={nextQuestion} > Next  </button>}
        {questionNo === questionList.length - 1 && <button onClick={submitQuestion} > Submit </button>}

      </div>
    </div>
    </div>
  );
}

export default App;


// if( getValue === result){
//   console.log(getValue   + " ok")

// }else{
 
// console.log(getValue  + " Not-ok")

// }