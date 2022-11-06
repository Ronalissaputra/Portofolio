import React from "react";
import Ronalis from "../img/Ronalis.jpg";
import instagram from "../img/instagram (1).png";
import email from "../img/gmail.png";
import facebook from "../img/facebook.png";
import Update from "./Update";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral  rounded-lg">
      <div className="text-center items-center mx-auto">
        <div className="avatar m-auto ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={Ronalis}
              alt="Foto Ronalis"
            />
          </div>
        </div>
        <p>
          @Ronalissaputra
          <br />
          Copyright &copy; Create By Ronalissaputra🦉
          <Update />
        </p>
      </div>
      <div>
        <span className="footer-title">Social Media</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/ronalputra_21/"
            className="tooltip-bottom tooltip tooltip-info"
            data-tip="Instagram"
          >
            <img src={instagram} alt="instagram" className="w-10 h-10" />
          </a>
          <a
            href="ronalissaputra@gmail.com"
            className="tooltip-bottom tooltip tooltip-info"
            data-tip="Email"
          >
            <img src={email} alt="email" className="w-10 h-10" />
          </a>
          <a
            href="https://web.facebook.com/ronal.putrabuturd"
            className="tooltip-bottom tooltip tooltip-info"
            data-tip="Facebook"
          >
            <img src={facebook} alt="facebook" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
