import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { GlobalStyles } from "./globalStyle/style";
import {Home} from './components/pages/home/index';
import {Products} from './components/pages/products/index';
import {News} from './components/pages/news/index';
import {NewsLetter} from './components/pages/newsLetter/index';
import {Contact} from './components/pages/contact/index';
import {PepsiContext} from './context/index';
import {useContext} from 'react'

export function App() {
  const {pepsiColor} = useContext(PepsiContext)
  
  return (
    <div >
      <Router>
        <GlobalStyles color={pepsiColor} />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/newsLetter" element={<NewsLetter/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}
