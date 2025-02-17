import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Login from "./components/auth/Login";



function App() {
  return (
  <div>
  <PageContainer>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:search" element={<Search/>} />
        <Route path="/login" element={<Login/>} />

        
        
      </Routes>
    </Router>
    </PageContainer>
    </div>
  );
}

export default App;
