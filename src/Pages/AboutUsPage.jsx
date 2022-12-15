import styles from "../style";
// import { Footer, Navbar, AboutUs, Testimonials} from "./components";
// import OurTeam from "./components/OurTeam";
// import Titlebar from "./components/TitleBar";
// import Map from "./components/Map";
import TitleBar from "../components/TitleBar"
import { Context, Footer, Map, Testimonials } from "../components";

const AboutUsPage = () => (
  <div className="bg-primary w-full overflow-hidden">
  <br />
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TitleBar/>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Context title="WHY CHOOSE US" text="Moralistic Enthusiastic Dependable Progressive Honesty Integrity Nurturing Ethical"/>
        <Map/>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  </div>
);

export default AboutUsPage;