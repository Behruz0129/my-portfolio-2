import { skillsData } from "../constants";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center pb-[48px] sm:pb-[96px] text-center">
      <header>
        <h2 className="text-darkPrimary text-[36px] sm:text-[48px] font-semibold mb-[12px] lg:mb-[24px]">
          #What I do?
        </h2>
        <p className="text-[18px] sm:text-[20px] lg:text-[28px] font-medium text-lightPrimary mb-[48px]">
          I use the latest and greatest technologies. Let me tell you <br />{" "}
          what I know and what I can do with them.
        </p>
      </header>
      <div className="skills-wrapper grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="card flex items-center flex-col gap-[24px]"
          >
            <img className="h-[75px]" src={skill.icon} alt={skill.title} />
            <h3 className="text-blackish text-[24px] font-semibold">
              {skill.title}
            </h3>
            <p className="text-darkPrimary text-[18px] w-[80%]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
