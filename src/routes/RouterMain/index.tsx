import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
