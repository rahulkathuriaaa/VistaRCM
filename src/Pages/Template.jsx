import { OtherContext, CTA, Footer, Titlebar, Stats, Clients } from "../components";
import styles from "../style";

const Template = (props) =>{
    return(
        <div className="bg-white w-full overflow-hidden z-[5]">
        {/* <br /> */}
          <div className={`bg-white ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
              <Titlebar headImage={props.headImage} headTitle={props.headTitle}/>
            </div>
          </div>
  
          {/* <br /> */}
          <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <OtherContext
               title={props.title} 
               hero={props.hero}
               text={props.text} 
               data={props.data}
               box1Title={props.box1Title}
               box1Data = {props.box1Data}
               box2Title={props.box2Title}
               box2Data={props.box2Data}
               box3Title = {props.box3Title}
               box4Title = {props.box4Title}
               box5Title = {props.box5Title}
               box6Title = {props.box6Title}
               Image={props.Image}
               />
              <Stats/>
              <Clients/>
              <CTA/>
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
        <Footer/>
          </div>
          </div>
        </div>
      );
      
    
}
export default Template;