import { logoText } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row text-center sm:text-left gap-10 py-[48px] justify-between items-center border-t-2 border-timGray">
      <img
        src={logoText}
        alt="bberdiyev logo"
        className="h-[30px] xs:h-[50px] object-contain"
      />
      <div>
        <p className="text-[blackish]">Made by Berdiyev Behruz.</p>
        <p className="text-[blackish]">
          Copyright 2023. All rights reserved. Privacy policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
