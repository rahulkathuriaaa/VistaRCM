import Button from "./Button"

const Map = () =>{
    return(
        <div>
            <section className="text-black body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0nassau,de19969+(VistaRCM)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      <div className="relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">P.O. Box #571, Nassau, DE 19969</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">support@vistarcmsolutions.com</a>
          <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    {/* <form  className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" action="https://formspree.io/f/xayzwlyw" method="POST"> */}

    <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" action="https://formspree.io/f/xayzwlyw" method="POST">
      <h2 className="text-black text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-black">We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-black">Name</label>
        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-black">Email</label>
        <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-black">Message</label>
        <textarea id="message" name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" className="bg-blue-400 text-white">Send message</button>
      <p className="text-xs text-black mt-3">Thankyou for choosing VistaRCM</p>
    </form>
    {/* </form> */}
  </div>
</section>
        </div>
    )
}

export default Map;