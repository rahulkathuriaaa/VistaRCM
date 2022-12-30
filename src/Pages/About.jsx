import { Footer } from "../components";
import styles from "../style";
const About = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <span className="text-gradient">VistaRCM</span>{" "}

            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine is real
              {/* <span className="inline-block text-deep-purple-accent-400">
                real
              </span> */}
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            VistaRCM is a healthcare revenue cycle management and medical billing company offering global capabilities & specialized solutions. By using industry-leading technology combined with high-touch relationship building, Our partnership allows healthcare practitioners & 
facilities to focus on patient care, maintain financial independence, and cultivate financial success.


            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Values<br />
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Moralistic                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                At VistaRCM, we encourage our employees to be moralistic and give them the freedom to raise their voice against any breach or misuse of power. We train employees to “Do things right and make sure others do it rightly too”.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Enthusiastic                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                We work with enthusiasm and zeal, which can be seen in our results. Office culture and atmosphere allows employees to relish their work and keep them in their best spirits. VistaRCM is always enthusiastic to perform and succeed.                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Dependable                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                VistaRCM is a name that you can depend on for all your billing related issues. We allow providers to transfer their overhead to us, and focus on their patients with complete peace of mind.                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Progressive                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                We believe in doing smart work rather than laborious work. Our primary focus is on improving the performance; ours as well as your practices’. Hence, we do brainstorming on the reports and issues, to lay strategy for progressive working of the practice.                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      
        
<section>
    <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 lg:w-1/2">
                <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                    Why VistaRCM                    </h2>
                    <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                    Our team comes with 3 decade of experience and  don’t believe in vendor /client philosophy. Rather we consider our self as an extension of your team and we work as a partner with a clear objective of increased revenue.  
We brought the most innovative and thought-advancing leaders in medical billing and revenue cycle management together to progress this industry into the modern, technological age. We seek a level of professionalism and analysis you won’t find elsewhere.
                    </p>
                    <div class="w-full md:w-1/3">
                        <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full px-8 lg:w-1/2">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            	Service and Helpfulness                             </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            We adapt a ‘can-do’ attitude                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            	Integrity and Transparent                             </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            We are principled, fair, open and honest                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                3
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            	Teamwork                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            We know Teams are stronger than Individuals                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<div class="relative">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          class="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div class="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg
            class="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="flex flex-col items-center justify-between xl:flex-row">
              <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Get In Touch
 <br class="hidden md:block" />
                </h2>
                <p class="max-w-xl mb-4 text-base text-black md:text-lg">
                VistaRCM believes in values, and abides to them while ensuring that we offer matchless services to our clients.
                </p>
                <a
                  href="/"
                  aria-label=""
                  class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    class="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Get in touch
                  </h3>
                  <form>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="firstName"
                        class="inline-block mb-1 font-medium"
                      >
                        First name
                      </label>
                      <input
                        placeholder="John"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="lastName"
                        class="inline-block mb-1 font-medium"
                      >
                        Last name
                      </label>
                      <input
                        placeholder="Doe"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label for="email" class="inline-block mb-1 font-medium">
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div class="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                    {/* <p class="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. Unsubscribe at any time.
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  );
};
export default About;
