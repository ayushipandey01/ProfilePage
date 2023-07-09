import LandingPage from "./components/LandingPage/LandingPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from "./components/PostsPage/PostsPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import TodoPage from "./components/TodoPage/TodoPage";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile/page/:id" element={<ProfilePage />} />
      <Route path="/profile/page/posts" element={<PostsPage />} />
      <Route path="/profile/page/gallery" element={<GalleryPage />} />
      <Route path="/profile/page/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
