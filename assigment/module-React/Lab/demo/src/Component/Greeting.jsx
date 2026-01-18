import React from 'react'

function Greeting({name}) {
  return (
    <div>
        <div className="container">
            <h1 className='text-center text-info'>Function Component</h1>
            <h3 className='text-center'>
                Hello, {name}!
            </h3>
        </div>
        <hr className="my-5" />
    </div>
  )
}

export default Greeting