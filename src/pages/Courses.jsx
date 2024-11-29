import { Link } from "react-router-dom";
import './Courses.css'; // Import the CSS file for styling
import chemistryThumbnail from '../assets/images/chemistry.jfif';
import physicsThumbnail from '../assets/images/physics.jfif';
import mathsThumbnail from '../assets/images/maths.jfif';
import biologyThumbnail from '../assets/images/biology.jfif';
// Sample course data
const coursesData = [

  {
    id: 1,
    title: "Maths",
    thumbnail: mathsThumbnail, 
  },
  {
    id: 2,
    title: "Physics",
    thumbnail: physicsThumbnail, 
  },
  {
    id: 3,
    title: "Chemistry",
    thumbnail: chemistryThumbnail 
  },

  {
    id: 4,
    title: "Biology",
    thumbnail: biologyThumbnail, 
  },

 
  
];

function Courses() {
  return (
    <div className="courses-container">
      <h1>All Courses</h1>
      <div className="courses-grid">
        {coursesData.map(course => (
          <div className="course-card" key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
              <h2>{course.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;