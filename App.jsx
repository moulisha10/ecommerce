import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AuthLogin } from "./pages/Login/AuthLogin";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/login" element={<AuthLogin />} />
      </Routes>
    </ErrorBoundary>
  );
}
export default App;
