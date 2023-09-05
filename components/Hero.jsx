const Hero = () => {
    return (
      <div className="flex md:flex-row-reverse flex-col items-center justify-center gap-4 mt-10 md:mt-40">
          <img className="p-1 rounded-full ring-2 ring-gray-300" 
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
          }}
          src="https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/359746489_6714841381899280_5397832173784774151_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH9_SPRQEbty48gFK3kXZTsV31ojF4rvrpXfWiMXiu-ulZQuCdK6YBYr2T9g-hg1WLOOvJZDyQ6hMOAyzbgfxiM&_nc_ohc=01d9ENiqRFIAX-abias&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&oh=00_AfAjhEsDVT9eAdn5TVSP76OFlnjhK528qxh1LZeMeWn3jA&oe=64F45E9D"
          alt="Developer profile image"
          /> 
  
          <div className="flex flex-col gap-4 md:w-2/3">
            <p className="text-3xl md:text-5xl font-bold md:text-lef text-center">
              Hello, I'm <span className="text-blue-500">Mark Ernie</span>. I am a {" "}
               <span className="text-blue-500">Web Developer</span> from <span className="text-blue-500">Philippines</span>  
              </p>
              <p className="text-gray-500 text-lg md:text-left text-center">
                I am a Web Developer with experience in Node.js using NextJS, Tailwind.CSS.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="flex bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                <a href="mailto:markernie00@gmail.com" target="_blank">Contact Me</a>
                </button>
                <button className="bg-blue-200 text-gray-600 px-4 py-2 rounded-full hover:bg-blue-300">
                  <a href="https://drive.google.com/uc?export=download&id=1duA_lq73yAmDRZBPRCr0R_rHGAYwWlr9">Download CV</a>
                </button>
              </div>
          </div>
  
        </div>
    )
  }
  
  export default Hero