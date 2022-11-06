import React from "react";
import Framework from "./component/Framework";
import Hirosection from "./component/Hirosection";
import Services from "./component/Services";
import Footer from "./component/Footer";
import DesainTools from "./component/DesainTools";
import OfficeTools from "./component/OfficeTools";
import Sertifikat from "./component/Sertifikat";
import DarkMode from "./component/DarkMode";

function App() {
  return (
    <div className="bg-slate-900 dark:bg-white">
      <div className="max-w-5xl mx-auto w-11/12">
        <DarkMode />
        <Hirosection />
        <Services />
        <Framework />
        <DesainTools />
        <OfficeTools />
        <Sertifikat />
        <Footer />
      </div>
    </div>
  );
}

export default App;
