import { projectsData } from "../constants";
import { ScrollTop } from "../components";

const Projects = () => {
  return (
    <>
      <div className="sm:px-16 px-6">
        <section className=" pt-[150px] sm:pt-[192px] pb-[48px] sm:pb-[96px] ">
          <header className="flex flex-col items-center text-center mb-[64px] lg:mb-[128px]">
            <h1 className="header-text text-[32px] sm:text-[40px] lg:text-[64px] font-semibold mb-[16px] lg:mb-[24px] leading-[130%]">
              Feel My Vibe
            </h1>
            <p className="w-[80%] lg:w-[60%] text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-lightPrimary">
              The best way to judge an artist is to see what he has done. Feel
              my taste and capabilities with{" "}
              <span className="text-darkPrimary font-semibold">
                my projects.
              </span>
            </p>
          </header>
          <div className="projects-wrapper grid gap-x-10 gap-y-20 grid-cols-1 lg:grid-cols-2">
            {projectsData.map((project) => (
              <div className="card" key={project.id}>
                <img
                  className="mb-[16px] lg:mb-[24px] border-blackish border"
                  src={project.image}
                  alt={project.title}
                />
                <div className="context text-blackish flex flex-col sm:flex-row justify-between">
                  <div className="descr mb-6">
                    <h1 className="text-[24px] lg:text-[32px] font-semibold mb-[8px] lg:mb-[16px]">
                      {project.title}
                    </h1>
                    <div className="flex flex-col xs:flex-row gap-3 text-[16px] text-primaryColor">
                      {project.tech.map((technology, index) => (
                        <p key={index}>{technology}</p>
                      ))}
                    </div>
                  </div>
                  <div className="buttons flex gap-3">
                    <a href={project.link} target="_blank">
                      <button className="bg-blackish transition-all hover:bg-primaryColor text-[white] px-6 py-4 sm:px-8 text-[14px] sm:text-[18px] font-semibold">
                        Demo
                      </button>
                    </a>
                    {project.code && (
                      <a href={project.code} target="_blank">
                        <button className="bg-[white] transition-all hover:border-primaryColor hover:text-primaryColor text-blackish border-[2px] px-6 py-4 sm:px-8 text-[14px] sm:text-[18px] font-semibold">
                          Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ScrollTop />
    </>
  );
};

export default Projects;
