function Contact() {
  return (
    <div className="flex justify-center">
      <div className="container my-12 mx-12 px-2 md:px-4 font-sans text-[#3F375C]">
        <div className="flex mt-10 max-lg:inline-block">
          <form className="w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 bg-[#D9CAB3] rounded-xl shadow-lg shadow-[#3F375C] text-sm">
            <div className="mb-3 w-full mt-10 min-[320px]:w-auto min-[320px]:m-4 ">
              <label className="block font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-2 py-[10px] border rounded-md outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3 w-full min-[320px]:w-auto min-[320px]:m-4">
              <label className="block font-medium mb-[2px] " htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-2 py-[10px] border rounded-md outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3 w-full min-[320px]:w-auto min-[320px]:m-4">
              <label className="block font-medium mb-[2px] " htmlFor="message">
                Message
              </label>
              <textarea className="px-2 py-2 border rounded-[5px] w-full outline-none resize-none" name="message" id="message" placeholder="Message"></textarea>
            </div >
            <button type="button" className="mb-6 inline-block w-full rounded bg-[#3F375C] px-6 py-2.5 font-bold uppercase leading-normal text-[#D9CAB3] hover:shadow-md hover:bg-[#BC8034] min-[320px]:w-auto min-[320px]:m-4">
              Send
            </button>
          </form >
          <div className="w-full mx-2 text-center shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="md:max-w-xl lg:max-w-3xl ">
              <h5 className="mb-12 px-6 text-6xl font-bold text-[#3F375C] min-[320px]:m-6">
                Contact Us
              </h5>
            </div>
            <div className="font-normal text-xl text-[#3F375C]">
              <p>At this moment there is no us. I´m running this project alone. So any feedback you provide, any suggestions you have, and any new ideas you like to share, don´t hesitate and write to me right away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact