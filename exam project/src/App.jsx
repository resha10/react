import { AuthProvider } from './Components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<PrivateRoute><PostForm /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><PostForm /></PrivateRoute>} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
