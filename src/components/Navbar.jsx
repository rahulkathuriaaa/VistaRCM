import { useState } from "react";

import { close, logo, menu } from "../assets";
// import img from "../assets/vistarcm.png"
import { navLinks } from "../constants";
// import DropDown from "./DropDown";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[60px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          if (nav.id == "service") {
            return (
              <>
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setIsDropDownOpen(!isDropDownOpen);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>

                {isDropDownOpen && (
                  <div id="dropdown" className="z-10 w-44 rounded divide-y divide-">
                    <div>
                    <ul className="py-1 text-sm" aria-labelledby="dropdownDefault">
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Physician Billing Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Medical Billing & Coding
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Medical Billing & Collections
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Fee Schedule Evaluations
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Healthcare Contract Management{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          A/R Recovery
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Practice Management
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Patient Eligibility Verification
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Revenue Cycle Management{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Healthcare Denial Management
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 text-black">
                          Physician Credentialing
                        </a>
                      </li>
                    </ul>
                    </div>
                  </div>
                )}
              </>
            );
          } else {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          }
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle(!toggle);
            setIsDropDownOpen(false);
          }}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => {
              if (nav.id == "service") {
                return (
                  <>
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-black" : "text-dimWhite"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => {
                        setActive(nav.title);
                        setIsDropDownOpen(!isDropDownOpen);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>

                    {isDropDownOpen && (
                      <div
                        id="dropdown"
                        className="z-10 w-44 rounded divide-y divide-"
                      >
                        <ul
                          className="py-1 text-sm"
                          aria-labelledby="dropdownDefault"
                        >
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Physician Billing Services
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Medical Billing & Coding
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Medical Billing & Collections
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Fee Schedule Evaluations
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Healthcare Contract Management{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              A/R Recovery
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Practice Management{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Patient Eligibility Verification
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Revenue Cycle Management{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Healthcare Denial Management{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-4 text-black">
                              Physician Credentialing{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                );
              } else {
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-black" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>


    // <!-- component -->
    
  );
};

export default Navbar;

{
  /* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */
}
