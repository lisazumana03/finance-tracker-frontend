import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import BudgetForm from './pages/account/budget/BudgetForm'
import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/budget-form" element={<BudgetForm />} />
      </Routes>
    </Router>
  )
}

export default App
