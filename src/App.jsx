import "./App.css";
import Blog from "./components/Blogs/Blog";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App font-sans">
      <Navbar></Navbar>
      <div className=" bg-black max-w-7xl mx-auto px-6 py-6 rounded-xl">
        <Blog></Blog>
        <Faq></Faq>
      </div>
    </div>
  );
}

export default App;
