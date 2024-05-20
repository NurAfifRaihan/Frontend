// import Header from './components/header.jsx';
import './App.css'
// import Hello from './components/hello.jsx';
// import Main from './components/main.jsx';
// import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import {Route, Routes} from "react-router-dom";

function Components() {

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
        {/* <Header />
        <Hello />
        <Main />
        <Footer /> */}
    </div>
);
}

export default Components
