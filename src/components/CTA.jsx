import styles from "../style";
import Button from "./Button";



const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
      For more information on this service and how it can benefit your practice email us at support@vistarcm.com or call at +1 302-319-9870.

</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
