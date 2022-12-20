// import styles from "./style";
import styles from "../style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer,Stats, Hero } from "/components";
// import MainHeader from "./components/MainHeader";
// import MainHeader from "../components/MainHeader";
import Business from "../components/Business";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Billing from "../components/Billing";
import CardDeal from "../components/CardDeal";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import { ChatBot } from "../components";
import Footer from "../components/Footer";


const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <MainHeader/>
      </div>
    </div> */}

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <ChatBot/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business />
        <Billing />
        <CardDeal />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
