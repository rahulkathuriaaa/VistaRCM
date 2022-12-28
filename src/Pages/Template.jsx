import { OtherContext, CTA, Footer, Titlebar, Stats, Clients } from "../components";
import styles from "../style";

const Template = (props) =>{
    return(
        <div className="bg-primary w-full overflow-hidden">
        <br />
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Titlebar headImage={props.headImage} headTitle={props.headTitle}/>
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
              <OtherContext
               title={props.title} 
               text={props.text} 
               data={props.data}
               box1Title={props.box1Title}
               box1Data = {props.box1Data}
               box2Title={props.box2Title}
               box2Data={props.box2Data}
               box3Title = {props.box3Title}
               />
              <Stats/>
              <Clients/>
              <CTA/>
              <Footer/>
            </div>
          </div>
        </div>
      );
      
    
}
export default Template;