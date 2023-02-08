import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home/HomePage";
import DisneyPage from "./pages/Disney/DisneyPage";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import DisneyDetail from "./pages/DisneyDetail/DisneyDetail";
import Pagination from "./shared/components/Pagination/Pagination";

function App() {
  return (<>
    <Router>

    <Header><Pagination/></Header>
    
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}/>
      <Route path="/disney" element={<DisneyPage></DisneyPage>}/>
      <Route path="/disney/:id" element={<DisneyDetail></DisneyDetail>}/>
    </Routes>
    
    <Footer><Pagination/></Footer>
    
    </Router>
    </>);
}

export default App;
