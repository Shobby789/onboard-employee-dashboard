import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route path={route.url} element={route.page} key={index} />;
      })}
    </Routes>
  );
}

export default App;
