import { checkup, reception, service } from "../assets";
import styles from "../style";

const Context = (props) => {
    return (
      <div className="relative w-full h-[670px] text-left text-base text-black font-roboto">
        <section className="absolute top-[0px] left-[0px] w-[600px] h-[670px]">
          <img
            className="absolute top-[121px] left-[300px] w-[298.67px] h-[428.67px] rounded-[15px]"
            alt=""
            src={service}
          />
          
          <div className="absolute top-[0px] left-[0px] w-[270px] h-[670px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[15px] w-[270px] h-[320px] object-cover "
              alt=""
              src={reception}
            />
            <img
              className="absolute top-[350px] left-[0px] rounded-[15px] w-[270px] h-[320px] object-cover"
              alt=""
              src={checkup}
            />
          </div>
          <img
            className="absolute top-[533px] left-[596px] w-[3.33px] h-[3.33px]"
            alt=""
            src="../ellipse-44.svg"
          />
        </section>
        <div className="absolute top-[153px] left-[715px] w-[470px] h-[452px]">
          <div className="absolute w-full top-[calc(50%_-_73px)] left-[0%] leading-[25px] inline-block h-[77px]">
            {props.data}
          </div>
          <div className="absolute w-full top-[calc(50%_+_34px)] left-[0%] leading-[28px] inline-block h-[88px]">
            <br />
          </div>
          <b className="absolute top-[39px] left-[0px] text-[35px] leading-[45px] capitalize inline-block font-inter w-[469px]">
          {props.text}  </b>
          {/* <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[372px] left-[0px] rounded-[10px] [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[170px] h-[64px]" /> */}
          {/* <div className="absolute top-[391px] left-[33px] text-lg leading-[150%] capitalize font-medium font-poppins text-gray-500 inline-block">
            Get Started
          </div> */}
          <div className="relative md:absolute top-[12px] left-[0px] text-xl leading-[130%] uppercase font-poppins [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[351px] h-[27px]">
            {props.title}
          </div>
        </div>
      </div>
    );
  };
  
  export default Context;
  