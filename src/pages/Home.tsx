import Banner from '../components/Banner'
import Test from '../components/practice/Test'

const Home = () => {
  return (
    <div>
      <div className=' w-5/6 mx-auto mt-20'>
      <div className=' w-full bg-slate-200 rounded-xl h-48 md:h-72 lg:h-96 overflow-hidden'>
        <div className=' bg-gradient-to-r from-lime-300 via-cyan-300/20 h-full w-2/3'></div>
      </div>
      <Banner /> 
      <div className='w-11/12 mx-auto flex flex-col gap-10'>
        <div className=' w-full bg-slate-200 rounded-lg'>
          <Test title="Fetch api 練習" />
        </div>
        <div className=' w-full h-36 bg-slate-200 rounded-lg'></div>
        <div className=' w-full h-36 bg-slate-200 rounded-lg'></div>
      </div>
      </div>
      <footer className=' h-48'></footer>
    </div>
  )
}

export default Home