import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewItem from "./components/AddNewItem";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddNewItem />} />
      </Routes>
    </div>
  );
}

export default App;
