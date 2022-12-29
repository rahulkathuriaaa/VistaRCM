import { Context, CTA, Footer, Titlebar } from "../components";
import Type3 from "../components/Type3";
import styles from "../style";
import { useState } from "react";

const Common = (props) =>{
  const [show, setShow] = useState(props.show)
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
              { show && <Type3 head1={props.head1} data1={props.data1} head2={props.head2} data2={props.data2} head3={props.head3} data3={props.data3} heading={props.heading}/>}
              <br />
              <br />
              <br />
              <br />
              

              <CTA/>
              <Footer/>
            </div>
          </div>
        </div>
      );
      
    
}
export default Common;