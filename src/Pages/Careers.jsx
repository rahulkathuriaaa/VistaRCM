import { career1, career2, career3, careers } from "../assets";
import { Footer } from "../components";
import styles from "../style";

const Careers = () => {
    return(
      <div>

        <div className="relative ">
  <img src={careers} className="absolute inset-0 object-cover w-full h-full" alt="" />
  <div className="relative bg-gray-900 bg-opacity-75">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Together We<br className="hidden md:block" />
          Achieve <span className="text-teal-accent-400">More!</span>
          </h2>
          <p className="max-w-xl mb-4 text-base text-white md:text-lg">
          We pride ourselves on attracting and developing an unconventional mix of talent that enables us to think and act differently and in turn deliver the best RCM services.

</p>
          <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-white">
            Learn more
            <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800 text-center md:text-left">

    <h2 className="text-3xl font-bold mb-12 text-center">Explore revenue cycle careers with VistaRCM in Noida, India</h2>

    <div className="flex flex-wrap mb-6">
      <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
        <div
          className=" ripple shadow-lg rounded-lg mb-6"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={career1}
            className="w-full" alt="Louvre" />
         
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
        <h5 className="text-lg font-bold mb-3">EXECUTIVE - MEDICAL BILLING</h5>
        {/* <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/></svg>Travels
        </div> */}
        <p className="text-gray-500 mb-6">
          <small>
            <a href="" className="text-gray-900">Today, Part Time Pro Rated</a></small>
        </p>
        <p className="text-gray-500">
        As an Executive for medical billing services, you will be responsible for delivering Patient Registration, Charge Entry, Payment Posting, and other revenue cycle transaction processing services. 

        </p>
      </div>
    </div>

    <div className="flex flex-wrap mb-6">
      <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
        <div
          className=" ripple shadow-lg rounded-lg mb-6"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={career2}
            className="w-full" alt="Louvre" />
           
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
        <h5 className="text-lg font-bold mb-3">EXECUTIVE - ACCOUNTS RECEIVABLE (AR CALLERS)</h5>
          {/* <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>Art
          </div> */}
          <p className="text-gray-500 mb-6">
            <small>
Today, Full Time Non Exempt</small>
          </p>
          <p className="text-gray-500">
          As an executive for Accounts Receivable services, you will be responsible for making calls to insurance companies to follow-up on pending claims. We are looking for people with excellent spoken English skills, preferably with experience in account receivable and denial management processes.

          </p>
      </div>
    </div>

    <div className="flex flex-wrap mb-6">
      <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
        <div
          className=" ripple shadow-lg rounded-lg mb-6"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={career3}
            className="w-full" alt="Louvre" />
         
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
        <h5 className="text-lg font-bold mb-3">Account Manager</h5>
        {/* <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"/></svg>Business
        </div> */}
        <p className="text-gray-500 mb-6">
          <small>
            <a href="" className="text-gray-900">Yesterday, Full Time Non Exempt</a></small>
        </p>
        <p className="text-gray-500">
        The Account Manager is responsible for maintaining existing accounts that are using VistaRCM by scheduling check-ins, resolving customer issues, and preventing churn. You'll likely excel in this role if you love talking with customers, optimizing their accounts, and don't shy away from solving the tough issues when they arise - in fact, you revel in coming up with creative solutions to create win/win results. Your role is crucial to our company as you help us keep our existing business closed by the Inside Sales Representatives.

        </p>
      </div>
    </div>

  </section>

</div>


<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
      </div>


    )
}
export default Careers;