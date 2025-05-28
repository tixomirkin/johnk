// import Image from "next/image";
import bg_main from "@/public/main_page/1_main_section/main_bg.svg"
import MainSection from "@/components/main_page/main_section";
import QuoteSection from "@/components/main_page/2_quote_section";
import Section3 from "@/components/main_page/3_section";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Section4 from "@/components/main_page/4_section";
import Section5 from "@/components/main_page/5_section";

export default function Home() {
  return (
      <>
          <Header/>
          <MainSection/>
          <div className='background-class z-10'>
              <QuoteSection/>
              <Section3/>
              <Section4/>
              <Section5/>
              <Footer/>
          </div>

      </>

  );
}
