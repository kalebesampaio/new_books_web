import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { HomePage } from "../../pages/HomePage";
import { BookPage } from "../../pages/BookPage";
import { TypePage } from "../../pages/TypePage";
import { GenresPage } from "../../pages/GenresPage";
import { ViewsPage } from "../../pages/ViewsPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { SettingsPage } from "../../pages/SettingsPage";
import { BookEditPage } from "../../pages/BookEditPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
      <Route path="/type" element={<TypePage />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/views" element={<ViewsPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/user/settings" element={<SettingsPage />} />
        <Route path="/book/:bookId/edit" element={<BookEditPage />} />
      </Route>
    </Routes>
  );
};
