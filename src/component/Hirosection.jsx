import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

function Hirosection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="py-32 text-center">
          <h1 className=" text-2xl font-semibold text-indigo-700">
            Hi, Nama Saya Ronalis
          </h1>
          <p className="text-md mb-3 max-w-md md:text-xl text-slate-300 dark:text-slate-800">
            Saya Seorang{" "}
            <span className="text-indigo-500 font-bold">Progmming</span> Web
            Developper{" "}
            <span className="text-slate-600 font-bold italic">Pemula</span> &
            Mahasiswa{" "}
            <span className="font-bold text-indigo-500">Informatika</span>
          </p>
          <label
            htmlFor="my-modal-4"
            className="btn btn-primary md:text-sm lg:text-md md:btn-md btn-sm"
          >
            Download CV
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-sm font-bold md:text-lg">
                Hi, Selamat Datang
              </h3>
              <p className="py-4 text-sm md:text-lg">
                Mohon Maaf CV dalam proses pengerjaan, Silahkan masukkan pesan
                anda di live chat dibawah, Terima kasih..🙏;
              </p>
            </label>
          </label>
          <div className="connect flex items-center justify-center my-2">
            <a
              href="https://linkedin.com/in/ronalis-saputra-057994245"
              target="_blank"
              className="w-10 h-10 mx-1 cursor-pointer"
            >
              <img src={linkedin} alt="gtihub" />
            </a>
            <a
              href="https://github.com/Ronalissaputra"
              target="_blank"
              className="w-10 h-10 mx-1 cursor-pointer"
            >
              <img src={github} alt="gtihub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hirosection;
