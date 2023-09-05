const About = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mt-10 md:mt-40 pb-10 ">
          <img
            src="https://scontent.xx.fbcdn.net/v/t39.30808-6/369189664_6857873450929405_8203080556271658833_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFm520b58QYLJvADahyN5opG3ljuXbE5CUbeWO5dsTkJZIeUI76ENYAlN99UzCGrOyYbhSQOeXLl4S1LLhRJFnC&_nc_ohc=tSyb_ijjCXUAX-Vx6aa&_nc_ht=scontent.xx&oh=00_AfCtAZE7fd4QvCH7S_BpKUvOyWuG4fw5BAQ0vWTDs9WB_w&oe=64F410E2"
            alt="Developer profile image"
            style={{
              height: "500px",
              objectFit: "cover",
              width: "100%",
            }}
            className="rounded-md"
          />
          <div className="flex flex-col gap-4 md:w-2/3 md:ml-4 mt-20 md:mt-10">
            <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
            <p className="text-gray-500 text-lg">
              I graduated from Baliuag University in 2023 with a major in Information Technology specializing in Web & Mobile Development.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            <a href="https://drive.google.com/uc?export=download&id=1duA_lq73yAmDRZBPRCr0R_rHGAYwWlr9">Download CV</a>
            </button>
          </div>
        </div>
    )
  }
  
  export default About