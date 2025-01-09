import React, { useState } from 'react'

function Branch() {
  const [btech, setBtech] = useState(false)
  const [bca, setBca] = useState(false)
  const [mca, setMca] = useState(false)
  const [mtech, setMtech] = useState(false)
  
  const onclickBca = () => {
    setBca(!bca)
  }

  const onclickBtech = () => {
    setBtech(!btech)
  }
  const onclickMca = () => {
    setMca(!mca)
  }
  const onclickMtech = () => {
      setMtech(!mtech)
  }

  return (
    <div className="justify-center mx-[8%] my-4">
      <div className="text-2xl font-bold">
        <h1 className="">YOUR BRANCH</h1>
      </div>
      <div className="flex justify-between transition-all transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms text-start bg-white p-[10px] h-[200px]">
        <div>
        <button onClick={onclickBca}>
        <p className="text-lg font-medium">BCA</p>
      {bca ? 
      <ul className="border p-[10px]">
        <a href="/error">
        <li>1st year</li>
          </a>
       <a href="/error">
       <li>2nd year</li>
        </a> 
        <a href="/error">
       <li>3rd year</li>
        </a> 
      </ul>
       : 
       <></>
       }
    </button>
        </div>
        <div>
        <button onClick={onclickBtech}>
        <p className="text-lg font-medium">BTECH</p>
      {btech ? 
      <ul className="border p-[10px]">
       <a href="/error">
        <li>1st year</li>
          </a>
       <a href="/secondyear">
       <li>2nd year</li>
        </a> 
        <a href="/error">
       <li>3rd year</li>
        </a> 
        <a href="/error">
       <li>4th year</li>
        </a> 
      </ul>
       : 
       <></>
       }
    </button>
        </div>
   <div>
   <button onClick={onclickMca}>
        <p className="text-lg font-medium">MCA</p>
      {mca ? 
      <ul className="border p-[10px]">
        <a href="/error">
        <li>1st year</li>
          </a>
       <a href="/error">
       <li>2nd year</li>
        </a> 
      </ul>
       : 
       <></>
       }
    </button>
   </div>
   <div>
   <button onClick={onclickMtech}>
        <p className="text-lg font-medium">MTECH</p>
      {mtech ? 
      <ul className="border p-[10px]">
        <a href="/error">
        <li>1st year</li>
          </a>
       <a href="/error">
       <li>2nd year</li>
        </a> 
      </ul>
       : 
       <></>
       }
    </button>
   </div>
      </div>
    </div>
  )
}

export default Branch