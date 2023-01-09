import styles from "../style";
// import { Footer, Navbar, AboutUs, Testimonials} from "./components";
// import OurTeam from "./components/OurTeam";
// import Titlebar from "./components/TitleBar";
// import Map from "./components/Map";
import TitleBar from "../components/TitleBar"
import { Context, Footer, Map, Testimonials } from "../components";
import { physicianbilling } from "../assets";
import Map2 from "../components/Map2";

const AboutUsPage = () => (
  <div className="bg-primary w-full overflow-hidden">
  
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TitleBar headTitle="Contact Us" headImage={physicianbilling}/>
      </div>
    </div>
    {/* <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /> */}
    <br />
    <br />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Map2/>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  </div>
);

export default AboutUsPage;