import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import DashBoard from "./pages/DashBoard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
