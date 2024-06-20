import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

function App() {
  const [category,setCategory] = useState("general");
  const [lang,setLang] = useState("en");
  const [q,setQ] = useState('');
  const [searchBtn,setSearchBtn] = useState(false);
  return (
    <>
      <Navbar setCategory={setCategory} setLang={setLang} setQ={setQ} setSearchBtn={setSearchBtn}/>
      <NewsBoard category={category} lang={lang} q={q} searchBtn={searchBtn}/>
    </>
  )
}

export default App
