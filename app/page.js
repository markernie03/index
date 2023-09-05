import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";


export default function Home() {
  return <main className="min-h-screen mt-40" style={{maxWidth: "80%", margin: "auto", marginTop: "10rem",}}>
    <Hero/>
    <Projects/>
    <About/>  
  </main>;
  
}
