
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setprinciple] = useState("")
  const [rate, setrate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setinterest] = useState(0)

  const [isPrinciple, setisPrinciple] = useState(true)
  const [isRate, setisRate] = useState(true)
  const [isYear, setisYear] = useState(true)

 
  const validate =(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);



    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setprinciple(e.target.value)
        setisPrinciple(true)
      }
      else if (e.target.name=='rate'){
        setrate(e.target.value)
        setisRate(true)
      }
      else{
        setYear(e.target.value)
        setisYear(true)
      }

    }
    else{
      if(e.target.name=='principle'){
        setprinciple(e.target.value)
        setisPrinciple(false)
      }
      else if (e.target.name=='rate'){
        setrate(e.target.value)
        setisRate(false)
      }
      else{
        setYear(e.target.value)
        setisYear(false)
      }

    }
    
  }

  const handlereset =()=>{
    console.log('inside reset function');

    setprinciple("")
    setrate("")
    setYear("")
    setinterest(0)
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
    
  }
  const handlecalculate =()=>{
    setinterest((principle*rate*year)/100)
  }
  

  return (
    <>
    <div className='vh-100 w-100 bg-dark d-flex justify-content-center align-items-center'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className='bg-light rounded p-2'>
              <h1 className='d-flex justify-content-center align-items-center'>Simple Interest App</h1>
              <p className='d-flex justify-content-center align-items-center'>calculate your simple interest easily</p>
              <div className='bg-warning d-flex justify-content-center align-items-center p-4 rounded mt-4 flex-column'>
                <h1>₹ {interest}</h1>
                <p>Total simple interest</p>

              </div>

              <div className="my-3">
              <TextField id="outlined-basic" value={principle} onChange={(e)=>validate(e)} label="₹ priciple amount" variant="outlined" className='w-100' name='principle'/>
                {!isPrinciple && <p className='text-danger'>invalid input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" value={rate} onChange={(e)=>validate(e)} label="Rate of interest (%)" variant="outlined" className='w-100' name='rate'/>
              {!isRate &&<p className='text-danger'>invalid input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" value={year} onChange={(e)=>validate(e)} label="Year (y)" variant="outlined" className='w-100' name='year'/>
             {!isYear && <p className='text-danger'>invalid input</p>}
              </div>
              <div className="mb-3 d-flex justify-content-between ">
              <Button onClick={handlecalculate} disabled={isPrinciple && isYear && isRate?false:true} variant="contained" className='p-3' style={{width:'190px'}} color='success'>Calculate</Button>
              <Button onClick={handlereset} variant="outlined" className='p-3' style={{width:'190px'}}>Reset</Button>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
         
        </div>
      </div>

    </div>
    
    </>
  )
}

export default App
