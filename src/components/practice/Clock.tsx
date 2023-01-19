import { useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState<string>();

  const getTime = () => setTime(new Date().toLocaleTimeString('en-US'));

  setInterval(getTime, 1000);

  return (
    <div className=' flex justify-center items-center tracking-wider'>
      <div>{(typeof time != 'undefined') ? time : ""}</div>
    </div>
  )
}

export default Clock