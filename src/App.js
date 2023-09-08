import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routers/Router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
