import Banner from "./components/Banner";
import SectionInform from "./components/SectionInform";
import SectionMapa from "./components/SectionMapa";
import SectionParceiros from "./components/SectionParceiros";
import SectionDuvidas from "./components/SectionDuvidas";
import Footer from "./components/Footer";


export default function Home() {
  return (
      <main>
        <Banner/>
        <SectionInform/>
        <SectionMapa/>
        <SectionParceiros/>
        <SectionDuvidas/>
        <Footer/>
      </main>
  );
}
