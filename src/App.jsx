import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Posts from "./pages/Posts/Posts";
import TodoList from "./pages/TodoList/TodoList";
import TodoList2 from "./pages/TodoList/TodoList2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todolist" element={<TodoList2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
