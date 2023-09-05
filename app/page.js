import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";


export default function Home() {
  return <main className="min-h-screen mt-40" style={{maxWidth: "80%", margin: "auto", marginTop: "10rem",}}>
    <Hero/>
    <Projects/>
    <About/>  
  </main>;
  
}
