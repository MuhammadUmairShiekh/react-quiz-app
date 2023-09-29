// import logo from './mobile';
import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

const questionList = [
  {
    tittle: "What does HTML stand for?",
    option: ["Hyper Text Markup Language", "Hyper Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Text up Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    tittle: "Which HTML tag is used to define an internal style sheet?",
    option: ["<style>", "<script>", "<css>", "<Html>"],
    correctAnswer: "<style>"
  },
  {
    tittle: "Where is the correct place to insert a JavaScript?",
    option: ["Both <head> Section and <body> section ", "The <head> section", "The <body> section", "The <title> section"],
    correctAnswer: "Both <head> Section and <body> section"
  },
  {
    tittle: "The external JavaScript file must contain the <script> tag",
    option: ["True", "false" , "Undefine","NaN"],
    correctAnswer: "false"
  },
  {
    tittle: "What is the correct command to create a new React project?",
    option: ["npm create-react-app", "npx create-react-app" ,"npm create-react-app myReactAPP","npx create-react-app myReactAPP"  ],
    correctAnswer: "npm create-react-app myReactAPP"
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
      <h1 className='quiz' >Quiz Text</h1>
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