import React from 'react'

function Brands() {
    const advert = [
        {
          "id": 1,
          "title": "upGrad",
        },
        {
          "id": 2,
          "title": "Greek for greek",

        },
        {
          "id": 3,
          "title": "Unstop",
        },
        {
          "id": 4,
          "title": "Glassdoor",
        },
        {
          "id": 5,
          "title": "Simplelearn",
        },
    ]
  return (
    <div className="border border-white my-4 py-6 bg-white">
 <div className="justify-center flex">
        <p className="text-2xl text-gray-600">
        Trusted by 200+ Brands
        </p>
    </div>
     <div>
<div className="flex justify-between my-6 mx-8">{
     advert.map((i, val)=>{
        return(
            <div key={val}>
                    <h2 className="text-xl text-gray-500">{i.title}</h2>       
            </div> 
        )
                  
    })
} 
</div>
</div> 
    </div>
   
  )
}

export default Brands
