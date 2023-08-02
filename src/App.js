import { BrowserRouter as Router } from "react-router-dom";
import RoutesManager from "./routes/Routes";
import Footer from "./common/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <RoutesManager />
      <Footer />
    </Router>
  );
}

export default App;
