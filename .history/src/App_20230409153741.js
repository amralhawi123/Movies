import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NaveBar";
import MovesList from './Components/MovesList';
import MovisDetails from "./Components/MovisDetails";

function App() {

  return (
    <div className="font color-body ">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovesList/>}/>
            <Route path="/movie/:id" element={<MovisDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
