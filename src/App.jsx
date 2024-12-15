import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import "./App.css";
import HomeView from "./Views/HomeView";
import RegisterView from "./Views/RegisterView";
import LoginView from "./Views/LoginView";
import MoviesView from "./Views/MoviesView";
import DetailView from "./Views/DetailView";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;