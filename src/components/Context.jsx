import { checkup, reception, service } from "../assets";

const Context = (props) => {
    return (
      // <div className="relative w-full h-[670px] text-left text-base text-black font-roboto sm:flex-col sm:justify-center sm:items-center">
      //   <section className="absolute top-[0px] left-[0px] w-[600px] h-[670px] invisible lg:visible">
      //     <img
      //       className="absolute top-[121px] left-[300px] w-[298.67px] h-[428.67px] rounded-[15px] invisible lg:visible"
      //       alt=""
      //       src={service}
      //     />
          
      //     <div className="absolute top-[0px] left-[0px] w-[270px] h-[670px]">
      //       <img
      //         className="absolute top-[0px] left-[0px] rounded-[15px] w-[270px] h-[320px] object-cover invisible lg:visible"
      //         alt=""
      //         src={reception}
      //       />
      //       <img
      //         className="absolute top-[350px] left-[0px] rounded-[15px] w-[270px] h-[320px] object-cover invisible lg:visible"
      //         alt=""
      //         src={checkup}
      //       />
      //     </div>
      //     <img
      //       className="absolute top-[533px] left-[596px] w-[3.33px] h-[3.33px]"
      //       alt=""
      //       src="../ellipse-44.svg"
      //     />
      //   </section>
      //   <div className="absolute top-[153px] left-[715px] w-[470px] h-[452px] sm:flex-col sm:justify-center sm:items-center">
      //     <div className="absolute w-full top-[calc(50%_-_73px)] left-[0%] leading-[25px] inline-block h-[77px] sm:flex-col sm:justify-center sm:items-center">
      //       {props.data}
      //     </div>
      //     <div className="absolute w-full top-[calc(50%_+_34px)] left-[0%] leading-[28px] inline-block h-[88px]">
      //       <br />
      //     </div>
      //     <b className="absolute top-[39px] left-[0px] text-[35px] leading-[45px] capitalize inline-block font-inter w-[469px] sm:flex-col sm:justify-center sm:items-center">
      //     {props.text}  </b>
      //     {/* <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[372px] left-[0px] rounded-[10px] [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[170px] h-[64px]" /> */}
      //     {/* <div className="absolute top-[391px] left-[33px] text-lg leading-[150%] capitalize font-medium font-poppins text-gray-500 inline-block">
      //       Get Started
      //     </div> */}
      //     <div className="relative md:absolute top-[12px] left-[0px] text-xl leading-[130%] uppercase font-poppins [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[351px] h-[27px] sm:flex-col sm:justify-center sm:items-center">
      //       {props.title}
      //     </div>
      //   </div>
      // </div>

<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800">
    <div className="container mx-auto xl:px-32 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 flex items-center">
        <div>
          <img src={service} className="w-full rounded-lg shadow-lg"
            alt="" />
        </div>
        <div className="mb-12 lg:mb-0">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14">
            <h2 className="text-3xl font-bold mb-6">{props.text}</h2>
            {/* <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis
              voluptate ab error quam dolores doloremque, quae consectetur.
            </p> */}

            {/* <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best team
              </p>

              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best quality
              </p>

              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best experience
              </p>
            </div> */}

            <p className="text-gray-500 mb-0">
              {props.data}
            </p>
          </div>
        </div>

        {/* <div>
          <img src={reception} className="w-full rounded-lg shadow-lg"
            alt="" />
        </div> */}
      </div>
    </div>
  </section>

</div>
    );
  };
  
  export default Context;
  