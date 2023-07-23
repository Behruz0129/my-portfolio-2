import { Showcase, Skills } from "../components";
import { ScrollTop } from "../components";

const HomePage = () => {
  return (
    <>
      <div className="sm:px-16 px-6">
        <Showcase />
      </div>
      <div className="sm:px-16 px-6">
        <Skills />
      </div>
      <ScrollTop />
    </>
  );
};

export default HomePage;
