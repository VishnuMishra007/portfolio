const Contact: React.FC = () => {
  return (
    <div id="contact" className="flex flex-col items-center min-h-screen bg-gray-200">
    <h1 className="flex justify-center text-center text-4xl font-bold mt-6">
        Contact
    </h1>
    <div className="flex items-start justify-between p-6 mt-10">
      <div className="flex flex-col items-start w-7/12">
        <p className="flex flex-col items-start text-lg mb-4">
          <span className="font-bold text-3xl"> Let’s Connect </span>
          <span className="font-medium text-lg mt-2">
            Interested in collaborating or exploring my work? Whether it’s a
            technical challenge or a friendly hello, I’m always happy to chat.
            Reach out — I’d love to hear from you.
          </span>
        </p>
        <div className="flex flex-col w-12/12 mt-5">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name:
          </label>
          <input
            id="name"
            className="w-12/12 h-10 p-2 border border-gray-300 rounded-lg bg-white"
            placeholder="Type your name here..."
          ></input>
        </div>
        <div className="flex flex-col w-12/12 mt-5">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email:
          </label>
          <input
            id="email"
            className="w-12/12 h-10 p-2 border border-gray-300 rounded-lg bg-white"
            placeholder="Type your email id here..."
          ></input>
        </div>
        <div className="flex flex-col w-12/12 mt-5">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            className="w-12/12 h-full p-2 border border-gray-300 rounded-lg bg-white"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="flex flex-col max-w-fit mt-5">  
            <button className="bg-[#67b5cce3] text-white px-4 py-2 rounded hover:bg-[#0c718de3] transition-colors duration-300 cursor-pointer">
              Send Message 
            </button>
        </div>
      </div>
      <div className="flex flex-col  text-lg mb-4 w-3/12 justify-end items-end">
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=devmishra257@gmail.com' target="_blank" rel="noopener noreferrer"> <div
		  className="relative group py-2 px-1 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-9 w-8"
		>
		  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVv7yE75VOfrq9NqSHRVTaR8lC3zkCbF72wg&s" alt='Email' className="w-12" />
		  <span className="absolute right-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
				Send Email
			</span>
		</div></a>
		<a href='https://www.linkedin.com/in/vishnu-mishra-257/' target="_blank" rel="noopener noreferrer" > <div
		  className="relative group py-2 px-1 bg-gray-50 md:m-4 mx-2 mt-10 rounded-lg flex items-center hover:scale-125 transition-transform duration-300 cursor-pointer md:w-9 w-8"
		>
		  <img src="https://icon.icepanel.io/Technology/svg/LinkedIn.svg" alt='LinkedIn' className="w-12" />
		  <span className="absolute right-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
				Open LinkedIn Profile
			</span>
		</div></a>
      </div>
    </div>
     </div>
  );
};

export default Contact;
