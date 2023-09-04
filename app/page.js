import ProjectCard from "@/components/ProjectCard";



export default function Home() {
  
  const projects = [
    {
      id: "1",
      title: "Coming Soon",
      description: "To update",
      image: "/assets/images/Bankit.png",

    }, 
    {
      id: "2",
      title: "Coming Soon",
      description: "To update",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNtytowpDyjufV9n7QzMdjK-i-kYwrnIPXp0oCfSwBzugb1-Q0ecUM4wB02F1-Q2T2Kc&usqp=CAU" 
    }
    
  ];

  const Hero = () => {
    return (
      <div className="flex md:flex-row-reverse flex-col items-center justify-center gap-4 mt-10 md:mt-40">
        <img className="p-1 rounded-full ring-2 ring-gray-300" 
        style={{
          width: "350px",
          height: "350",
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              <a href="mailto:markernie00@gmail.com" target="_blank">Contact Me</a>
              </button>
              <button className="bg-blue-200 text-gray-600 px-4 py-2 rounded-md">
                <a href="https://drive.google.com/uc?export=download&id=1duA_lq73yAmDRZBPRCr0R_rHGAYwWlr9">Download CV</a>
              </button>
            </div>
        </div>

      </div>
    )
  };

  const Projects = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-40 mb-30 ">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div
          className="flex mt-20 flex-wrap justify-center md:justify-start"
          style={{
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    );
  };

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
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
          <a href="https://drive.google.com/uc?export=download&id=1duA_lq73yAmDRZBPRCr0R_rHGAYwWlr9">Download CV</a>
          </button>
        </div>
      </div>
    );
  };

  
  
  return <main c
  className="min-h-screen mt-40"
  style={{
    maxWidth: "80%",
    margin: "auto",
    marginTop: "10rem",
  }}>
    <Hero/>
    <Projects/>
    <About/>  
  </main>;
  
}
