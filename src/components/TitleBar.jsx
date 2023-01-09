const Titlebar = (props) => {
    return (
      // <div className="relative w-full h-[271px] text-left text-lg text-black font-roboto">
      //   <div className="absolute top-[0px] left-[0px] w-[1440px] h-[271px] mix-blend-multiply">
      //     <div className="absolute top-[-38.71px] left-[-99.48px] w-[1540.28px] h-[309.71px] bg-black" />
      //     <div className="absolute top-[0px] left-[0px] bg-gray-500" />
      //   </div>
      //   <div className="absolute top-[81px] left-[600px] w-[670px] h-[189.94px]">
      //     <div className="absolute top-[0px] left-[0px] w-[670px] h-[189.94px]">
      //       <div className="absolute top-[74px] left-[-20px] w-[200px] h-[55.94px]">
      //         <div className="absolute top-[1.24px] left-[95px] leading-[30px] ">
      //           ABOUT US
      //         </div>
      //         <div className="absolute top-[0px] left-[0px] leading-[30px] text-center inline-block w-[113px] h-[55.94px]">
      //           HOME /
      //         </div>
      //       </div>
      //       <div className="absolute top-[0px] left-[0px] w-[670px] h-[101px] text-4xl text-gray-100 font-poppins">
      //         <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[140%] font-semibold inline-block w-[670px]">
      //         <span className="text-gradient">About</span>{" "}

      //           <span> Us</span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // <div className="absolute top-[80px] left-[0px] w-full h-[250px] text-violet">
      //     <div className="absolute top-[0px] left-[0px] bg-gray-700 w-full h-[250px]" />
      //     <img
      //       className="absolute top-[0px] left-[0px] w-full h-[250px] object-cover mix-blend-multiply"
      //       alt=""
      //       src={props.headImage}
      //     />
      //     <div className="absolute top-[180px] left-[550px] leading-[50px] inline-block">
      //       <div className="absolute top-[1.24px] left-[95px] leading-[30px] inline-block text-white">
      //         Services
      //       </div>
      //       <div className="absolute top-[8px] left-[65px] bg-white w-[2px] h-[14px] opacity-[0.6]" />
      //       <div className="absolute top-[0px] left-[0px] leading-[30px] text-white text-center inline-block">
      //         Home
      //       </div>
      //     </div>
      //     <b className="absolute top-[127px] left-[500px] text-[40px] text-center sm:text-left leading-[50px] inline-block text-white text-center">
      //     {props.headTitle}
      //     </b>
      //   </div>
      <div className="min-w-full -z-[200]">

        <div className="w-full h-60 shadow-2x1 overflow-hidden relative min-w-full">
          <img className="absolute inset-0 h-full w-full object-cover" src={props.headImage} alt="" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 "></div>
          <div className="flex h-full items-center justify-center relative">
            <h1 className="text-3xl text-white tracking-wider font-semibold text-center">
              {props.headTitle}
            </h1>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Titlebar;
  

  // <div className="absolute top-[152px] left-[0px] w-[1920px] h-[350px] text-violet">
  //         <div className="absolute top-[0px] left-[0px] bg-gray-700 w-[1920px] h-[350px]" />
  //         <img
  //           className="absolute top-[0px] left-[0px] w-[1920px] h-[350px] object-cover mix-blend-multiply"
  //           alt=""
  //           src="../mask-group15@2x.png"
  //         />
  //         <div className="absolute top-[193px] left-[885px] w-[151px] h-[30px]">
  //           <div className="absolute top-[0px] left-[83px] leading-[30px] inline-block">
  //             Services
  //           </div>
  //           <div className="absolute top-[8px] left-[65px] bg-white w-[2px] h-[14px] opacity-[0.6]" />
  //           <div className="absolute top-[0px] left-[0px] leading-[30px] text-black text-center inline-block">
  //             Home
  //           </div>
  //         </div>
  //         <b className="absolute top-[127px] left-[852px] text-[40px] leading-[50px] inline-block text-black text-center">
  //           What We Do
  //         </b>
  //       </div>