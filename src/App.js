import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import {UserContext} from './context/UserContext';

//page & layout import
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader"
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/homepage" element={<Homepage />} />

          <Route path="/details/:id" element={<ReviewDetails />} />

          <Route path="/category/:id" element={<Category />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;