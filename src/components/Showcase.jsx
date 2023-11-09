import { showcaseImage } from "../assets";
import styles from "../style";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center pt-[150px] sm:pt-[192px] pb-[48px] sm:pb-[96px] text-center">
        <h1 className="header-text text-[48px] sm:text-[64px] lg:text-[96px] font-semibold mb-[16px] lg:mb-[24px] leading-[130%]">
          I Want to Build <br /> Billions of Projects.
        </h1>
        <p className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium text-lightPrimary mb-[48px]">
          Hi. My name is{" "}
          <span className="text-darkPrimary font-semibold">Behruz</span>. I’m{" "}
          <span className="text-darkPrimary font-semibold">
            Front-end Web Developer
          </span>{" "}
          <br />
          and{" "}
          <span className="text-darkPrimary font-semibold">
            UI/UX designer
          </span>{" "}
          from Uzbekistan.
        </p>
        <div className="flex gap-5">
          <a
            href="https://drive.google.com/file/d/1EzgwtEKfPvwWCNo3ygZb0SGFsrg2wwl9/view"
            target="_blank"
          >
            <button className={`bg-blackish text-[white] border-[2px] border-blackish btn ${styles.btn}`}>
              Resume
            </button>
          </a>
          <Link to="/projects">
            <button
              className={`bg-[white] text-blackish border-[2px] btn ${styles.btn}`}
            >
              Feel My Vibe
            </button>
          </Link>
        </div>
      </div>
      <img
        className="hidden xs:block w-[90%] md:w-[60%] pb-[48px] sm:pb-[96px]"
        src={showcaseImage}
        alt="developer environment"
      />
    </main>
  );
};

export default Showcase;
