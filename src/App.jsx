import React,{ useState, useEffect } from 'react'

function App() {
  const [themeSelected, setThemeSelected] = useState(3)
  const [theme, setTheme] = useState('firstTheme')

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

  return (
    <div className='min-h-screen py-10 flex justify-center items-center'>
      <div className=''>
        <div className='flex items-center gap-20'>
          <h1 className='text-xl font-semibold'>calc</h1>
          <div className='flex items-end gap-3'>
            <p className='text-[11px] font-semibold mb-0.5'>THEME</p>
            <div >
              <div className='text-[11px] px-1 flex justify-between font-semibold'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <button className='p-0.5 bg-blue-950 rounded-3xl w-12 cursor-pointer' onClick={handleThemeToggle}>
                <div className={`${themeSelected === 2 ? "mx-auto" : ""} ${themeSelected === 3 ? "ml-auto" : ""} rounded-full size-3 bg-red-700`}></div>
              </button>
            </div>
          </div>
        </div>
        <div className='screen rounded-md text-4xl font-bold p-5 mt-5'>399,981</div>
        <div className='keyboard grid grid-cols-4 P-5'>
          <button className='regularBtn'>7</button>
          <button className='regularBtn'>8</button>
          <button className='regularBtn'>9</button>
          <button className='accentBtn'>DEL</button>
          <button className='regularBtn'>4</button>
          <button className='regularBtn'>5</button>
          <button className='regularBtn'>6</button>
          <button className='regularBtn'>+</button>
          <button className='regularBtn'>1</button>
          <button className='regularBtn'>2</button>
          <button className='regularBtn'>3</button>
          <button className='regularBtn'>-</button>
          <button className='regularBtn'>.</button>
          <button className='regularBtn'>0</button>
          <button className='regularBtn'>/</button>
          <button className='regularBtn'>*</button>
          <button className='accentBtn col-span-2'>RESET</button>
          <button className='equalBtn col-span-2'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;
