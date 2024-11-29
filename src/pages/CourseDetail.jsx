import { useParams } from "react-router-dom";
import './CourseDetail.css'; // Import CSS for styling


const coursesData = [

    {
    id: 1,
    title: "Maths",
    description: "Delve into the intricacies of mathematics and uncover the connections between complex concepts and real-world applications",
    videoLinks: [
      { title: "Unit-1 introduction to Sets", url:  "/Mathsvideos/introduction.mp4"},
      { title: "Unit-1 setsAndElements", url: "/Mathsvideos/setsAndElements.mp4" },
      { title: "Unit-1 setDescription", url: "/Mathsvideos/SetDescription.mp4" },
      { title: "Unit-1 setNotions", url: "/Mathsvideos/setNotions.mp4" },

      { title: "Unit-1 operationsOnSets", url: "/Mathsvideos/operationsOnSets.mp4" },
      { title: "Unit-2 cont...", url: "/Mathsvideos/comingsoon.mp4" },
      { title: "Unit-2 cont...", url: "/Mathsvideos/comingsoon.mp4" },
      { title: "Unit-3 Solving Equations", url: "/Mathsvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Mathsvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Mathsvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Mathsvideos/comingsoon.mp4" },
    ],
  },

  {
    id: 2,
    title: "Physics",
    description: "Understand the fundamental principles of physics.",
    videoLinks: [
      { title: "Unit-1 Physics and Human Society ", url: "/Physicsvideos/introToPhysics.mp4" },
      { title: "Unit-1 cont...", url: "/Physicsvideos/comingsoon.mp4" },
      { title: "Unit-1 cont...", url: "Physicsvideos/comingsoon.mp4" },
      { title: "Unit-2 Physical Quantities", url: "/Physicsvideos/comingsoon.mp4" },
      { title: "Unit-2 cont...", url: "/Physicsvideos/comingsoon.mp4" },
      { title: "Unit-3", url: "/Physicsvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Physicsvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Physicsvideos/comingsoon.mp4" },
    ],
  },
  {
    id: 3,
    title: "Chemistry",
    description: "Dive deep into the molecular world and explore complex chemical reactions.",
    videoLinks: [
      { title: "Unit-1 Chemistry and its importance", url: "/Chemistryvideos/introToChemistry.mp4" },
      { title: "Unit-1 cont...", url: "/Chemistryvideos/introToChemistry2.mp4" },
      { title: "Unit-2 Measurements and Scientific Methods", url: "/Chemistryvideos/comingsoon.mp4" },
     
      { title: "Unit-3 Structure of tthe atoms", url: "/Chemistryvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "Chemistryvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "Chemistryvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "Chemistryvideos/comingsoon.mp4" },
      
    ],
  },
  {
    id: 4,
    title: "Biology",
    description: "Explore the fundamentals of biological systems and understand the processes that sustain life",
    videoLinks: [
      { title: "Unit-1 introduction to biology", url: "/Biologyvideos/introToBio.mp4" },
      { title: "Unit-1 cont...", url: "/Biologyvideos/introToBio2.mp4" },
     
       { title: "Unit-2 Characteristics and Classification  of Organisms", url: "/Biologyvideos/comingsoon.mp4" },
        { title: "Unit-2 cont...", url: "/Biologyvideos/comingsoon.mp4" },
{ title: "Unit-2 cont...", url: "/Biologyvideos/comingsoon.mp4" },

      { title: "Unit-3 ", url: "/Biologyvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Biologyvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Biologyvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Biologyvideos/comingsoon.mp4" },
      { title: "Unit-3 cont...", url: "/Biologyvideos/comingsoon.mp4" },
    ],
  },
];

function CourseDetail() {
  const { id } = useParams(); // Get the course ID from the URL
  const course = coursesData.find(course => course.id === parseInt(id)); // Find the course by ID

  if (!course) {
    return <div>Course not found!</div>; // Handle case where course doesn't exist
  }

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Videos</h2>
      <ul>
        {course.videoLinks.map((video, index) => (
          <li key={index}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;