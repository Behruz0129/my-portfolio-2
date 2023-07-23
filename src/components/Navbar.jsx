import { useState } from "react";
import { menu, logoImg } from "../assets";
import { navLinks, statLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center border-b-2 border-timGray z-[100000]">
      {/* Burger */}
      <div className="w-[28px] sm:w-[184px]">
        <img
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* Nav Menu */}
      <div
        onMouseUp={() => setToggle(!toggle)}
        className={`${
          !toggle ? "hidden" : "flex"
        } min-w-[250px] flex-col p-8 bg-[white] border-2 border-timGray absolute mx-6 sm:mx-16 top-[120px] left-0 sidebar`}
      >
        {/* Nav Links */}
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <Link key={nav.id} to={`/${nav.id}`}>
              {" "}
              <li
                className={`transition hover:translate-x-3 font-poppins font-medium cursor-pointer text-[20px] mb-6 text-timGray ${
                  index === navLinks.length - 1 ? "sm:mb-0" : "sm:mb-6"
                } `}
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
        {/* Stat Links */}
        <ul className="list-style-none flex flex-row sm:hidden">
          {statLinks.map((social, index) => (
            <li key={social.id}>
              <a href={social.link} target="_blank">
                <img
                  src={social.icon}
                  alt={social.id}
                  className={` w-[28px] h-[28px] object-contain cursor-pointer ${
                    index !== statLinks.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Logo */}
      <img
        src={logoImg}
        alt="bberdiyev logo + avatar"
        className="h-[30px] sm:h-[50px] sm:mx-10 object-contain ml-6"
      />
      {/* Stat Links */}
      <ul className="list-style-none sm:flex flex-row hidden ">
        {statLinks.map((social, index) => (
          <li className="relative stat-icon" key={social.id}>
            <a href={social.link} target="_blank">
              <img
                src={social.icon}
                alt={social.id}
                className={` w-[28px] h-[28px] object-contain cursor-pointer ${
                  index !== statLinks.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
            <p className="absolute tooltip">{social.id}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
