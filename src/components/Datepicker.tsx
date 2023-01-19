import { useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Datepicker = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setdates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);
  return (
    <div>
      <div onClick={()=>setOpenCalendar(!openCalendar)} className=' btn-condition md:w-52 peer-hover:bg-slate-100'>
        <div className=' bg-orange-200 rounded-full w-9 h-9'></div>
        <div className=' ml-5'>
          <div className=' text-xs font-bold tracking-wider'>DATE</div>
          <div className=' font-medium text-gray-800 tracking-wider'>{format(dates[0].startDate, "MM/dd")} - {format(dates[0].endDate, "MM/dd")}</div>
        </div>
      </div>
      {openCalendar && <DateRange
        editableDateInputs={true}
        // @ts-ignore
        onChange={item => setdates([item.selection])}
        minDate={new Date()}
        ranges={dates}
        className=' absolute mt-2 left-1/2 -translate-x-1/2 z-10 shadow-xl peer' />}
    </div>
  )
}

export default Datepicker