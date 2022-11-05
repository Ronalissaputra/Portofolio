import React from "react";
import Framework from "./component/Framework";
import Hirosection from "./component/Hirosection";
import Services from "./component/Services";
import Footer from "./component/Footer";
import Sertifikat from "./component/Sertifikat";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="max-w-5xl mx-auto w-11/12">
        <Hirosection />
        <Services />
        <Framework />
        <Sertifikat />
        <Footer />
      </div>
    </div>
  );
}

export default App;
