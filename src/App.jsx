import { BrowserRouter, Routes, Route } from "react-router-dom"
import SubmitForm from "./SubmitForm"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubmitForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
