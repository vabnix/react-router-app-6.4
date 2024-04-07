import { useParams, useLoaderData } from "react-router-dom";

export default function CareerPage() {
    const { id } = useParams()
    const career = useLoaderData()
  
    return (
      <div className="career-details">
        <h2>{career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Job Location: {career.location}</p>
        <div className="details">
          <span>Job Details:</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
        </div>
      </div>
    )
  }

//loader function
export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id );

  if(!res.ok){
    
  }
  return res.json();
};
