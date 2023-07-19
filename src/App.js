import "./App.css";
import Directory from "./components/directory/directory.component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <h1 className="app-title">Washing Machine</h1>
      <ToastContainer />
      <Directory />
    </div>
  );
}

export default App;
