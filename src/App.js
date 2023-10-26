// Components
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./common/components/Footer/Footer";
import RoutesManager from "./routes/Routes";
// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <RoutesManager />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
