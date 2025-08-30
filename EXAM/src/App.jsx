import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import BlogHeader from "./Components/Header";      // header
import BlogAdd from "./Components/BlogAdd";        // add blog
import BlogEdit from "./Components/BlogEdit";      // edit blog
import BlogView from "./Components/BlogView";      // view blog
import Home from "./Components/Home";              // home page
import SignIn from "./Components/Auth/SignIn";     // signin
import SignUp from "./Components/Auth/SignUp";     // signup

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <BlogHeader onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/add-post" element={<BlogAdd />} />
        <Route path="/edit-post/:id" element={<BlogEdit />} />
        <Route path="/posts/view/:id" element={<BlogView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
      </Routes>
    </Router>
  );
}

export default App;


