import { Clients, Footer, Titlebar } from "../components";
import Type4 from "../components/Type4";
import styles from "../style";
const MainService = (props) =>{
    return(
        <div className="bg-white">
            <Titlebar headImage={props.headImage} headTitle={props.headTitle} />
            <Type4/>

            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients/>
      </div>
    </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>

        


        </div>
    )
} 
export default MainService;