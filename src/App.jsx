import "./App.css";
import Blog from "./components/Blogs/Blog";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App font-sans">
      <Navbar></Navbar>
      <Blog></Blog>
      <Faq></Faq>
    </div>
  );
}

export default App;
