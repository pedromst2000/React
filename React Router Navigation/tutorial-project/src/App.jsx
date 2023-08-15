// router
import {  Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import BooksRoutes from './routes/BooksRoutes'
// import MainBooks from './pages/Books/MainBooks'
// import Book from './pages/Books/Book'
// import AddBook from './pages/Books/AddBook'
// import BooksLayout from './pages/Books/BooksLayout'

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/books">Books</Link></li>
          </ul>
      </nav>

{/* to manage all the routes of the app */}
      <Routes>
        <Route path='/' element={<Home/>} />     
        <Route path='/about' element={<About/>} />  
        
        {/* global routing books */}
        <Route path='/books/*' element={<BooksRoutes/>}/>

      {/* Nesting the books route */}
       
        {/* <Route path='/books' element={<BooksLayout/>}>
          <Route index element={<MainBooks/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='add' element={<AddBook/>}/>
        </Route>
        */}


        {/* routing books without nest */}

        {/* <Route path='/books' element={<MainBooks/>} />  
        <Route path='/books/:id' element={<Book/>} />  
        <Route path='/books/add' element={<AddBook/>} />           */}
        
        {/* route to handling invalid routes */}
        <Route path='*' element={<NotFound/>} />  
      </Routes>
    </div>
    )
}

export default App
