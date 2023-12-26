import {useState} from 'react'
let App=()=>{
  let qns=[{"q":"what is your name","op1":"abc","op2":"bbb","op3":"ccc","op4":"ddd"},
           {"q":"What is your country name ","op1":"india","op2":"USA","op3":"Nepal","op4":"UK"},
           {"q":"what is your state name ","op1":"Chhattisgarh","op2":"Delhi","op3":"Bihar","op4":"Punjab"},
           {"q":"Qualification in","op1":"Btech","op2":"Bsc","op3":"MBBS","op4":"BCOM"}]
  let ans={"q1":2,"q2":1,"q3":1,"q4":1}
  let[userans,setUser]=useState({})
  let [score,setScore]=useState("")
 let fun=(e)=>{
  setUser({...userans,[e.target.name]:e.target.value})
 }
 let result=()=>{
   let c=0
   for(let p in userans){
    if(userans[p]==ans[p]){
      c++
    }
   }
   setScore(c)
 }
  return(
    <div>
      {
        qns.map((item,index)=>{
          return(
            <div>
              <h1>{item.q}</h1>
            <div>
            <input type='radio' value="1" onChange={fun} name={`q${index+1}`}/>{item.op1}
            <input type='radio' value="2" onChange={fun} name={`q${index+1}`}/>{item.op2}
            <input type='radio' value="3" onChange={fun} name={`q${index+1}`}/>{item.op3}
            <input type='radio' value="4" onChange={fun} name={`q${index+1}`}/>{item.op4}
          </div>
          </div>
          )
        })
      }
      <button onClick={result}>Submit</button>
      {score!=""&&<div>Result;{score}</div>}
    </div>
  )
}
export default App