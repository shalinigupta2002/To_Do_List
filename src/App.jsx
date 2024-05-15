import Add from "./component/Add"
import Background from "./component/Background"
import Cards from "./component/Cards"
import Foreground from "./component/Foreground"
const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
      <Cards />
      <Add />
    </div>
  )
}

export default App
