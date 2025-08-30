import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import BlogHeader from './Components/BlogHeader';
import BlogAdd from './Components/BlogAdd';
import BlogEdit from './Components/BlogEdit';
import BlogHome from './Components/BlogHome';
import BlogView from './Components/BlogView';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* <BlogHeader onSearch={setSearchTerm} /> */}
      <Routes>
        <Route path="/" element={<BlogHome searchTerm={searchTerm} />} />
        <Route path="/add-blog" element={<BlogAdd />} />
        <Route path="/edit-blog" element={<BlogEdit />} />
        <Route path="/blogs/view" element={<BlogView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
