import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from "./logo.svg";
import Button from "../Button/Button";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Mercado">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
              Mercado
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Sobre">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
              Sobre
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Recursos">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
              Recursos
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contato">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
              Contato
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-[80px] flex justify-between border-b-2 text-white">
        <div className="flex">
          <span className="ml-5 text-3xl font-bold">
            <img src={Logo} className="w-[80px] h-[80px]" alt="" />
          </span>
        </div>

        <div className="lg:flex md:flex font-normal hidden justify-around self-center">
          <div>
            <ul className="flex gap-8 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="Mercado">
                <li className="">Mercado</li>
              </Link>
              <Link spy={true} smooth={true} to="Sobre">
                <li className="">Sobre</li>
              </Link>
              <Link spy={true} smooth={true} to="Recursos">
                <li className="">Recursos</li>
              </Link>
              <Link spy={true} smooth={true} to="Contato">
                <li className="">Contato</li>
              </Link>
            </ul>
          </div>
        </div>

          <div className="lg:flex md:flex font-normal hidden gap-3 self-center mr-16">
            <Button className="" text="Login" />
            <Button className="" text="Registre" />
          </div>

        {click && content}

        <button
          className="block md:hidden transtion text-3xl mr-10"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <GiHamburgerMenu size={35} /> }
        </button>
      </div>
    </nav>
  );
};

export default Nav;
