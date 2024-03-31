import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { HomePage } from "../../pages/HomePage";
import { BookPage } from "../../pages/BookPage";
import { TypePage } from "../../pages/TypePage";
import { GenresPage } from "../../pages/GenresPage";
import { ViewsPage } from "../../pages/ViewsPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/type" element={<TypePage />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/views" element={<ViewsPage />} />
    </Routes>
  );
};
