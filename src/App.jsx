import React,{ useState, useEffect } from 'react'

function App() {
  const [themeSelected, setThemeSelected] = useState(1)
  const [theme, setTheme] = useState('firstTheme')
  const [screenText, setScreenText] = useState('198')

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
    setScreenText(prev => {
      if (prev.length === 1 || (prev.length === 2 && prev.startsWith("-"))) {
        return "0"; 
      }
      return prev.slice(0, -1); 
    });
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
        <div className='screen rounded-md text-4xl font-bold p-5 mt-5 text-right'>{screenText}</div>
        <div className='keyboard grid grid-cols-4 p-5 rounded-md gap-5 mt-5'>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="7">7</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="8">8</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="9">9</button>
          <button className='accentBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' onClick={handleDelete}>DEL</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="4">4</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="5">5</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="7">6</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="+">+</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="1">1</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="2">2</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="3">3</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="-">-</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value=".">.</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="0">0</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="/">/</button>
          <button className='regularBtn border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold' value="*">*</button>
          <button className='accentBtn col-span-2 border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold'>RESET</button>
          <button className='equalBtn col-span-2 border-b-4 rounded-md py-1 px-2 sm:px-4 text-lg sm:text-2xl font-bold'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;