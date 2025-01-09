import React from 'react'

function Choosecard() {
    const coursedata = [
        {
          "id": 1,
          "title": "Dstl",
        },
        {
          "id": 2,
          "title": "Digital electronic",

        },
    ]
  return (
    <div className="flex justify-center">
        {
            coursedata.map((val, i) => {
                return (
                   <div key={i} className="m-[10px]">
                    <div className="border p-[10px] rounded w-[200px]">
                        <button className="border w-full h-full rounded-full bg-green-600 text-co">+</button>
                        <h1>{val.title}</h1>
                    </div>
                   </div>
                )
            })
        }
    </div>
  )
}

export default Choosecard