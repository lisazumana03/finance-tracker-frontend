//This is the page for route redirection, we will 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetForm from './pages/account/budget/BudgetForm';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/budget-form" element={<BudgetForm />} />
      </Routes>
    </Router>
  );
}