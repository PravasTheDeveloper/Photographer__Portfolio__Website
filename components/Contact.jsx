import React from "react";

function Contact() {
  return (
    <>
      <div id="Contanct" className="bg-slate-200 py-20 px-4">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white lg:w-6/12 lg:p-28 py-7 lg:py-28 w-full text-center rounded-lg">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mb-5 font-light text-gray-500 text-base dark:text-gray-400">We are here for your help .</p>
            <div>
              <input type="text" className="border border-slate-200 lg:w-2/4 w-3/4 h-10 px-4 mb-5 outline-slate-400 rounded-md" placeholder="Enter Your Name" />
            </div>
            <div>
                <input type="text" className="border border-slate-200 lg:w-2/4 w-3/4 h-10 px-4 mb-5 outline-slate-400 rounded-md" placeholder="Enter Your Email" />
            </div>
            <div>
              <textarea type="text"  className="border border-slate-200 lg:w-2/4 w-3/4 px-4 mb-5 h-36 outline-slate-400 pt-3 rounded-md" placeholder="Enter Your Comment" />
            </div>
            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
