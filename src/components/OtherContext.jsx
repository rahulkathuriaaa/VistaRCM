// import {  Eligibilty } from "../assets";

export const OtherContent = (props) => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                {props.title}
                <br className="hidden md:block" />
                
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    {props.text}
                  </span>
                </span>
              </h2>
              <p className="text-base text-left text-gray-500 md:text-lg">
                {props.data}
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-1">
              <div className="bg-boxColor border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r ">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box1Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box1Data}
                  </p>
                </div>
              </div>
              <div className="bg-boxColor2 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box2Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box2Data}
                  </p>
                </div>
              </div>
              <div className="bg-boxColor border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box3Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box2Data}
                  </p>
                </div>
              </div>
              <div className="bg-boxColor2 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box4Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box4Data}
                  </p>
                </div>
              </div>
              <div className="bg-boxColor border-l-4 shadow-sm border-deep-purple-accent-400">

                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box5Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box4Data}
                  </p>
                </div>
              </div>
              <div className="bg-boxColor2 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-1 font-bold leading-5 text-white text-2xl">
                    {props.box6Title}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {props.box4Data}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
            <img
              className="object-cover w-full h-90 rounded shadow-lg sm:h-90"
              src={props.hero}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  export default OtherContent;