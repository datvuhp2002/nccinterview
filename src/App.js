import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./Pages/Routers";

function App() {
  return (
    <Router basename="/nccinterview">
      <div className="App">
        <Routes>
          {router.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
