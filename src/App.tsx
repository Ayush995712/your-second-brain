import { DashBoard } from "./pages/dashboard"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
}
export default App

// React components must be named with a Capital Letter
// three very useful libraries to read about when you want your frontend to talk to your backend:
// 1. react-hook-forms
// 2. react-query
// 3. swr

// 12:30 min left in the video