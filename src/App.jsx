import { HomePage, Projects, Contact, ErrorPage } from "./pages/";
import styles from "./style";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <div
        className={`sm:px-16 px-6 fixed top-0 bg-[white] ${styles.boxWidth}`}
      >
        <Navbar />
      </div>
      <div className={`bg-[white] ${styles.boxWidth}`}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div className="sm:px-16 px-6">
        <Footer />
      </div>
    </>
  );
};

export default App;
