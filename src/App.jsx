import "./App.css";
import Blog from "./components/Blogs/Blog";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blog></Blog>
    </div>
  );
}

export default App;
