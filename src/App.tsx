import { CardBook } from "./components/Book/Card";
import { Footer } from "./components/Footer";

import { RouterMain } from "./routes/RouterMain";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <CardBook />
      <Footer />
      <RouterMain />
    </>
  );
};

export default App;
