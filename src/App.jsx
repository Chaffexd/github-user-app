
import './App.css'
import Input from './components/Search/Input'

function App() {

  return (
    <main className='h-screen bg-light-off-white flex justify-center items-center flex-col'>
      <div className='w-3/5 h-16 flex items-center bg-light-white rounded-lg'>
        <Input />
      </div>
      <div>
        This will hold the result
      </div>
    </main>
  )
}

export default App
