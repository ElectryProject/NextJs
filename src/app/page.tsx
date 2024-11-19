import Link from "next/link";
import Banner from "./components/Banner";
import SectionInform from "./components/SectionInform";
import SectionParcerias from "./components/SectionMapa";
import SectionMapa from "./components/SectionMapa";


export default function Home() {
  return (
      <main>
        <Banner/>
        <SectionInform/>
        <SectionMapa/>
      </main>
  );
}
