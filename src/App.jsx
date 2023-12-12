import React,{useState} from 'react'

const App = () => {
  const [display, setDisplay] = useState("")
  

  const clickValue=(value)=>{
    if (value === "=") {
      try {
        setDisplay(eval(display)
        );
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }



  }
  return (
    <>
    <input type="text" 
    style={{border:"2px solid green"}}
    value={display}
    className='text-black'


    />
    <div className='my-4 grid grid-cols-3 w-[200px] gap-y-2'>
    <button className='bg-slate-400 text-white px-2  mx-1' onClick={()=>clickValue(c)}>
      <i>c</i>
    </button>
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("/")}>
      <i>/</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("*")}>
      <i>*</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("+")}>
      <i>+</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("-")}>
      <i>-</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("1")}>
      <i>1</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("2")}>
      <i>2</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("3")}>
      <i>3</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("4")}>
      <i>4</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("5")}>
      <i>5</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("6")}>
      <i>6</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("7")}>
      <i>7</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("8")}>
      <i>8</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("9")}>
      <i>9</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("0")}>
      <i>0</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("00")}>
      <i>00</i>
    </button >
    <button className='bg-slate-400 text-white px-2  mx-1'  onClick={()=>clickValue("=")}>
      <i>=</i>
    </button >
   
   

    </div>
   
      
    </>
  )
}

export default App
