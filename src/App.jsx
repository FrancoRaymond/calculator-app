import React,{ useState, useEffect } from 'react'

function App() {
  const [themeSelected, setThemeSelected] = useState(1)
  const [theme, setTheme] = useState('firstTheme')
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleThemeToggle = () => {
   
    setTheme(() => {
      if(themeSelected === 3){
        setThemeSelected(1)
      }else{
        setThemeSelected(themeSelected + 1)
      }
    })
  }

  useEffect(() => {
    if(themeSelected === 1){
      setTheme("firstTheme")
    }else if(themeSelected === 2){
      setTheme("secondTheme")
    }
    else{
      setTheme("thirdTheme")
    }
  }, [themeSelected])


  useEffect(() => {
    document.body.classList = theme
  },[theme])

  const handleDelete = () => {
    setDisplay(prev => {
      if (prev.length === 1 || (prev.length === 2 && prev.startsWith("-"))) {
        return "0"; 
      }
      return prev.slice(0, -1); 
    });
  };

  const handleNumberClick = (number) => {
    if (waitingForSecondOperand) {
      setDisplay(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };  

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(display);
  
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }
  
    setOperator(nextOperator);
    setWaitingForSecondOperand(true);
  };

  const handleEqualsClick = () => {
    if (firstOperand != null && operator != null) {
      const secondOperand = parseFloat(display);
      const result = calculate(firstOperand, secondOperand, operator);
  
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return b;
    }
  };
  
  return (
    <div className='min-h-screen py-10 flex justify-center items-center'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>calc</h1>
          <div className='flex items-end gap-3'>
            <p className='text-[11px] font-semibold mb-0.5'>THEME</p>
            <div >
              <div className='text-[11px] px-1 flex justify-between font-semibold'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <button className='toggleBtn p-0.5 rounded-3xl w-12 cursor-pointer' onClick={handleThemeToggle}>
                <div className={`toggleSwitch ${themeSelected === 2 ? "mx-auto" : ""} ${themeSelected === 3 ? "ml-auto" : ""} rounded-full size-3 bg-red-700`}></div>
              </button>
            </div>
          </div>
        </div>
        <div className='screen rounded-md text-4xl font-bold p-5 mt-5 text-right'>{display}</div>
        <div className='keyboard grid grid-cols-4 p-5 rounded-md gap-5 mt-5'>
          <button className='regularBtn' onClick={() => handleNumberClick("7")}>7</button>
          <button className='regularBtn' onClick={() => handleNumberClick("8")}>8</button>
          <button className='regularBtn' onClick={() => handleNumberClick("9")}>9</button>
          <button className='accentBtn' onClick={handleDelete}>DEL</button>
          <button className='regularBtn' onClick={() => handleNumberClick("4")}>4</button>
          <button className='regularBtn' onClick={() => handleNumberClick("5")}>5</button>
          <button className='regularBtn' onClick={() => handleNumberClick("6")}>6</button>
          <button className='regularBtn' onClick={() => handleOperatorClick("+")}>+</button>
          <button className='regularBtn' onClick={() => handleNumberClick("1")}>1</button>
          <button className='regularBtn' onClick={() => handleNumberClick("2")}>2</button>
          <button className='regularBtn' onClick={() => handleNumberClick("3")}>3</button>
          <button className='regularBtn'onClick={() => handleOperatorClick("-")}>-</button>
          <button className='regularBtn' onClick={() => handleNumberClick(".")}>.</button>
          <button className='regularBtn' onClick={() => handleNumberClick("0")}>0</button>
          <button className='regularBtn' onClick={() => handleOperatorClick("/")}>/</button>
          <button className='regularBtn' onClick={() => handleOperatorClick("*")}>*</button>
          <button className='accentBtn col-span-2' onClick={handleClear}>RESET</button>
          <button className='equalBtn col-span-2' onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;