import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path ="/" element={<Home />}>Home</Route>
      </Routes>
      
    </Router>
  );
}

export default App;
