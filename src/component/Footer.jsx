import React from "react";
import Ronalis from "../img/Ronalis.jpg";
import instagram from "../img/instagram (1).png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral  rounded-lg">
      <div className="text-center items-center mx-auto">
        <div className="avatar m-auto">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={Ronalis} alt="Foto Ronalis" />
          </div>
        </div>
        <p>
          @Ronalissaputra
          <br />
          Copyright &copy; Create By Ronalissaputra
          <div className="badge badge-primary">Sedang mengupdate Content..</div>
        </p>
      </div>
      <div>
        <span className="footer-title">Social Media</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/ronalputra_21/">
            <img src={instagram} alt="instagram" className="w-10 h-10" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" className="w-10 h-10" />
          </a>
          <a href="https://web.facebook.com/ronal.putrabuturd">
            <img src={facebook} alt="facebook" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
