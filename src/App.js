import React from 'react';
import './Advisor.css';

function App()  { 
  const [advise,setadvise]= React.useState("Hello!  Have a nice day!")
  async function getadvise(){
    const response= await fetch("https://api.adviceslip.com/advice")
    const data= await response.json()
    setadvise(data.slip.advice)
  console.log(data)
  }
  return (
    <div className="Advisor">
    <div className="content">
    {advise}
    
      <button onClick={getadvise}>Depressed <br/>
      Click me</button>
    </div>
    </div>
  );
}

export default App;
