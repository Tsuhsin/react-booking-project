import Datepicker from './Datepicker'
import Conditions from './Conditions'
import Destination from './Destination'

const Banner = () => {
  return (
    <div className=' w-11/12 -mt-8 md:-mt-10 mb-10 mx-auto flex justify-center py-4 md:py-8 px-4 bg-gray-50 border border-gray-400 rounded-lg shadow-2xl'>
      <div className=' flex flex-col justify-center gap-2 md:flex-row'>
        <Datepicker />
        <Conditions />
        <Destination />
      </div>
    </div>
  )
}

export default Banner