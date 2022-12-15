import { Business, Context, CTA, Footer, Titlebar } from "../components";
import styles from "../style";

const Common = (props) =>{
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
              <Context title={props.title} text={props.text} data={props.data}/>
              <Business/>
              <CTA/>
              <Footer/>
            </div>
          </div>
        </div>
      );
      
    
}
export default Common;