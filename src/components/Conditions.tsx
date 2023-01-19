import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Conditions = () => {
  type Condition =  {
    adult: number,
    children: number,
    room: number,
  }
  type ConditionType = keyof Condition & string;

  const [openConditions, setOpenConditions] = useState(false);
  const [conditions, setConditions] = useState(
    {
      adult: 1, // 初始人數,房間數為一
      children: 0,
      room: 1,
    } as Condition
  );
  const handleCounter = (name: ConditionType, sign: number) => { 
    setConditions(prev => {
      return{
        ...prev,
        [name] : sign === 1 ?  conditions[name] + 1 : conditions[name] - 1,
      }
    })
}
  return (
    <div className=' select-none'>
      <div onClick={()=>setOpenConditions(!openConditions)} className=' btn-condition peer-hover:bg-slate-100'>
        <div className=' bg-sky-200 rounded-full w-9 h-9'></div>
        <div className=' ml-5'>
          <div className=' text-xs font-bold tracking-wider'>CONDITIONS</div>
          <div className=' font-normal text-gray-800 text-sm flex gap-2'>
            <div>
              <span className=' font-medium'>{conditions.room}</span><span className=' ml-1'>room</span> 
            </div>
            <div>
              <span className=' font-medium'>{conditions.adult}</span><span className=' ml-1'>adult</span>
            </div>
            <div>
              <span className=' font-medium'>{conditions.children}</span><span className=' ml-1'>children</span>
            </div>
          </div>
        </div>
      </div>
      {openConditions && 
      <div className=' absolute mt-4 flex left-1/2 -translate-x-1/2 text-gray-800 font-Poppins bg-white rounded-full shadow-center'>
        <div className=' flex gap-4 py-2 px-4 cursor-pointer select-none'>
          <button disabled={conditions.room <=1 } onClick={() => handleCounter("room", 0)} className=' h-6 w-6 rounded-full bg-sky-100 disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faMinus} className=' text-xs text-sky-800' />
          </button>
          {conditions.room}
          <button onClick={() => handleCounter("room", 1)} className=' h-6 w-6 rounded-full bg-sky-100 flex justify-center items-center'>
            <FontAwesomeIcon icon={faPlus} className=' text-xs text-sky-800' />
          </button>
        </div>
        <div className=' flex gap-4 py-2 px-4 cursor-pointer select-none'>
          <button disabled={conditions.adult <=1 } onClick={() => handleCounter("adult", 0)} className=' h-6 w-6 rounded-full bg-sky-100 disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faMinus} className=' text-xs text-sky-800' />
          </button>
          {conditions.adult}
          <button onClick={() => handleCounter("adult", 1)} className=' h-6 w-6 rounded-full bg-sky-100 flex justify-center items-center'>
            <FontAwesomeIcon icon={faPlus} className=' text-xs text-sky-800' />
          </button>
        </div>
        <div className=' flex gap-4 py-2 px-4 cursor-pointer select-none'>
          <button disabled={conditions.children <=0 } onClick={() => handleCounter("children", 0)} className=' h-6 w-6 rounded-full bg-sky-100 disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faMinus} className=' text-xs text-sky-800' />
          </button>
          {conditions.children}
          <button onClick={() => handleCounter("children", 1)} className=' h-6 w-6 rounded-full bg-sky-100 flex justify-center items-center'>
            <FontAwesomeIcon icon={faPlus} className=' text-xs text-sky-800' />
          </button>
        </div>
      </div>
      }
    </div>
  )
}

export default Conditions