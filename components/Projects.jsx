import ProjectCard from "./ProjectCard";

const projects = [
    {
      id: "1",
      title: "Bankit",
      description: "Bank System",
      image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-xyPeLT3s2_w79n1xNE9CtCGhEBP9VuM-owqtwmuGyMVnQPli_Zv1ruWXsrVEFxWzaKBNl9y4jmC2LkzV0l0U6WxC6_=s1600",
      link: "https://github.com/markernie03/markernie03"
    }, 
    {
      id: "2",
      title: "Coming Soon",
      description: "To update",
      image: "https://aencrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNtytowpDyjufV9n7QzMdjK-i-kYwrnIPXp0oCfSwBzugb1-Q0ecUM4wB02F1-Q2T2Kc&usqp=CAU" 
    }
    
  ];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-40 mb-30 ">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div
          className="flex mt-20 flex-wrap justify-center md:justify-start"
          style={{
            gap: "2rem",
          }}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
        
      </div>
  )
}

export default Projects