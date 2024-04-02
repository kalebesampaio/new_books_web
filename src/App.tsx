import { RouterMain } from "./routes/RouterMain";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer theme="dark" />
      <RouterMain />
    </>
  );
};

export default App;
