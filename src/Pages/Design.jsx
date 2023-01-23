import {CTA, Footer, Titlebar, Stats, Clients } from "../components";
import Type3 from "../components/Type3";
import styles from "../style";

const Design = (props) =>{
    return(
        <div className="bg-white w-full overflow-hidden">
          <div className={`bg-white ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Titlebar headImage={props.headImage} headTitle={props.headTitle}/>
            </div>
          </div>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
          {/* <br />
          <br />
          <br />
          <br /> */}
          <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Type3
               title={props.title} 
               text={props.text} 
               heading={props.heading}
               data={props.data}
               head1={props.head1}
               data1={props.data1}
               head2={props.head2}
               data2={props.data2}
               head3={props.head3}
               data3={props.data3}

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
export default Design;