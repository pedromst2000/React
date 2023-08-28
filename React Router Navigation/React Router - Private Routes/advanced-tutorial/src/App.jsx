import {BrowserRouter} from 'react-router-dom'
import AuthWrap from './auth/AuthWrap'

function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <AuthWrap/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
