// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import BlinkitHeader from './Components/Header';
// import AddProduct from './Components/AddProduct';
// import EditProduct from './Components/EditProduct';
// import Home from './Components/Home';
// import SignIn from "./Components/Authentication/SignIn";
// import SignUp from './Components/Authentication/Signup';

// function App() {
//    const [searchTerm, setSearchTerm] = useState("")

//   return (
//     <>
//       <BlinkitHeader onSearch={setSearchTerm} />
//       <Routes>
//         <Route path="/" element={<Home searchTerm={searchTerm} />} />
//         <Route path="/add-product" element={<AddProduct />} />
//         <Route path="/edit-product/:id" element={<EditProduct />} />
//         {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
//         <Route path="/signIn" element={<SignIn />} />
//         <Route path="/signUp" element={<SignUp />} />
//       </Routes>
//     </>
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AppNavbar from './components/Navbar';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';

// function App() {
//   return (
//     <Router>
//       <AppNavbar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<PostList />} />
//           <Route path="/add" element={<PostForm />} />
//           <Route path="/edit/:id" element={<PostForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppNavbar from "./components/Navbar";
// import BlogAdd from "./components/BlogAdd";
// import BlogEdit from "./components/BlogEdit";

// function App() {
//   return (
//     <Router>
//       <AppNavbar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/BlogAdd" element={<BlogAdd />} />
//           <Route path="/BlogEdit" element={<BlogEdit />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import PostList from './Components/PostList';
// import BlogAdd from './Components/BlogAdd';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<PostList />} />
//         <Route path="/add" element={<BlogAdd />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import BlogAdd from "./Components/BlogAdd";
import BlogEdit from "./Components/BlogEdit";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<BlogAdd />} />
          <Route path="/Edit" element={<BlogEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
