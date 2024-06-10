// import Header from './components/header.jsx';
import './App.css'
// import Hello from './components/hello.jsx';
// import Main from './components/main.jsx';
// import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import {Route, Routes} from "react-router-dom";
import CreateMovie from './pages/movie/Create.jsx';
import NowPlayingMovie from './pages/movie/Nowplaying.jsx';
import TopRated from './pages/movie/Toprated.jsx';
import Popular from './pages/movie/Popular.jsx';
import Layout from './Layout/index.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme.js';
import GlobalStyle from './components/GlobalStyle/index.jsx';


function Components() {

  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/movie/create' element={<CreateMovie/>}></Route>
            <Route path='/movie/popular' element={<Popular/>}/>
            <Route path='/movie/now' element={<NowPlayingMovie/>}/>
            <Route path='/movie/top' element={<TopRated/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
);
}

export default Components
