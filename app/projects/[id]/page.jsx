"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "1",
    title: "Comming Soon",
    description: "Pending",
    image: "https://adminlte.io/wp-content/uploads/2022/02/tailwindcss-templates.png",

    longDescription: `This Project Use more in Tailwind CSS`
  }, 
  {
    id: "2",
    title: "Comming Soon",
    description: "Pending",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNtytowpDyjufV9n7QzMdjK-i-kYwrnIPXp0oCfSwBzugb1-Q0ecUM4wB02F1-Q2T2Kc&usqp=CAU",
    
    longDescription: `Understanding more in terms of Next JS Project`
  }
];

const page = ({ params }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = (id) => {
      setProject(projects.find((p) => p.id === id));
    };

    if (params?.id) loadProject(params.id);
  }, [params?.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img
        src={project?.image}
        alt={project?.title}
        style={{
          height: "300px",
          width: "500px",
        }}
        className="rounded-lg object-cover"
      />
      <h1 className="text-4xl font-bold mt-10 text-center text-gray-900">
        {project?.title}
      </h1>
      <p className="mt-10 text-lg text-gray-600 text-left max-w-2xl">
        {project?.longDescription}
      </p>
      <div className="flex flex-row mt-10 gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Github
        </button>
      </div>
    </div>
  );
};

export default page;
