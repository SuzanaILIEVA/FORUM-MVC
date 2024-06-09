import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListController from "./Pages/ListPostPage/ListController"
import AddPostConroller from "./Pages/AddPostPage/AddPostConroller"
import Header from "./Components/Header"
import "./assets/style.scss"


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ListController/>}/>
        <Route path="/add-post" element={<AddPostConroller/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
