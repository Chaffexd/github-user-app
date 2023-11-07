
import './App.css'
import Input from './components/Search/Input'
import Switcher from './components/Switcher/Switch'

function App() {

  return (
    <main className='h-screen bg-light-off-white flex justify-center items-center flex-col dark:bg-dark-navy'>
      <div className='w-3/5 mb-4 flex justify-between'>
        <h1 className='font-bold text-2xl dark:text-white'>Dev finder</h1>
        <div>
          <Switcher />
        </div>
      </div>
      <div className='flex flex-col items-center w-3/4'>
        <Input />
      </div>
    </main>
  )
}

export default App
