import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import SearchIcon from '@mui/icons-material/Search';

function App() {
  <SearchIcon/>
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies/:id" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
