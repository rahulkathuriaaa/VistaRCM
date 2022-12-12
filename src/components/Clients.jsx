import { airbnb, binance, dropbox, advancedmd, alleva, collectly, InboxHealth, modmed, medicusit, zoll, imagetrend, elico, drchrono, GreenWay, Kipu, waystar, eclinicalworks, cerner, experity, meditech, cpsi, medstreaming, HST, bestnotes, sunwave, theranest } from "../assets";
import styles from "../style";
import './Client.css';
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
    <div className="slider">
    <div className="slide-track">
        {/* <!-- 9 SLIDES --> */}
         <div className="slide">
            <img src={airbnb}/>
        </div>
         <div className="slide">
            <img src={binance}/>
        </div>
         <div className="slide">
            <img src={dropbox}/>
        </div>
        <div className="slide">
            <img src={advancedmd}/>
        </div>
        <div className="slide">
            <img src={alleva}/>
        </div>
        <div className="slide">
            <img src={collectly}/>
        </div>
        <div className="slide">
            <img src={InboxHealth}/>
        </div>
        <div className="slide">
            <img src={modmed}/>
        </div>
        <div className="slide">
            <img src={medicusit}/>
        </div>
        <div className="slide">
            <img src={zoll}/>
        </div>
        <div className="slide">
            <img src={imagetrend}/>
        </div>
        <div className="slide">
            <img src={elico}/>
        </div>
        <div className="slide">
            <img src={drchrono}/>
        </div>
        <div className="slide">
            <img src={GreenWay}/>
        </div>
        <div className="slide">
            <img src={Kipu}/>
        </div>
        <div className="slide">
            <img src={waystar}/>
        </div>
        <div className="slide">
            <img src={eclinicalworks}/>
        </div>
        <div className="slide">
            <img src={cerner}/>
        </div>
        <div className="slide">
            <img src={experity}/>
        </div>
        <div className="slide">
            <img src={meditech}/>
        </div>
        <div className="slide">
            <img src={cpsi}/>
        </div>
        <div className="slide">
            <img src={medstreaming}/>
        </div>
        <div className="slide">
            <img src={HST}/>
        </div>
        <div className="slide">
            <img src={bestnotes}/>
        </div>
        <div className="slide">
            <img src={sunwave}/>
        </div>
        <div className="slide">
            <img src={theranest}/>
        </div>
        </div>

    </div>
    </div>
  </section>
);

export default Clients;
