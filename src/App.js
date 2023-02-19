import "./App.css";
import Header from './components/home/header/Header'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePages from "./components/pageContent/HomePages";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>       
        <Route exact path="/" element={<HomePages />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
