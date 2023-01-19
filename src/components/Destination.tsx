import { useState } from 'react';

const Destination = () => {
  const [destination, setDestination] = useState("");
  return (
    <div>
      <div className=' btn-condition cursor-default'>
        <div className=' bg-violet-300/80 rounded-full w-9 h-9'></div>
        <div className=' ml-5'>
          <div className=' text-xs font-bold tracking-wider'>DESTINATION</div>
          <div className=' font-medium text-gray-800'>
            <input type="text" placeholder='Taipei' className=' bg-transparent outline-none focus:border-b border-violet-400 w-32' onChange={(e)=>setDestination(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination