const Map2 = () =>{
    return(
        <div>
            <section className="text-gray-400 bg-gray-900 body-font relative ">
  <div className="absolute inset-0 bg-gray-900 ">
    <iframe title="map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0nassau,de19969+(VistaRCM)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
    ></iframe> 
    
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
    <form className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-white" action="https://formspree.io/f/xayzwlyw" method="POST">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Get in touch</h2>
      <p className="leading-relaxed mb-5 text-white">Expect a response from us within 24 hours</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-white">Name</label>
        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-white">Message</label>
        <textarea id="message" name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" className="bg-blue-400 text-white">Send message</button>
      <p className="text-xs text-white mt-3 text-center">Thankyou for choosing VistaRCM</p>
    </form>
    
    </div>
  </div>
</section>
        </div>
    )
}
export default Map2;
