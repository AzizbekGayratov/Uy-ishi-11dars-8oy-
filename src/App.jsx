import { Route, Routes } from "react-router-dom";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import HomePage from "./components/HomePage";
import NavbarComponent from "./components/Navbar";

const App = () => {
  return (
    <>
      <header className="container mx-auto px-4">
        <NavbarComponent />
      </header>
      <main className="container mx-auto px-4 grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
