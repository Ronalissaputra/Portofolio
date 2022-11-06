import React from "react";

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
        </div>
      </div>
    </div>
  );
}

export default Hirosection;
