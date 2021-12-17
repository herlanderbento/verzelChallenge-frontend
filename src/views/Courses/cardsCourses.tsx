import { AiFillCalendar } from "react-icons/ai";
import { Col } from "reactstrap";
import { CardCourseItems, VideoBg } from "./styles";

interface ICardsCoursesProps {
  video: string;
  name: string;
  date_lesson: string;
}

export function CardsCourses({ video, name, date_lesson }: ICardsCoursesProps) {
  return (
    <Col lg="4">
      <CardCourseItems>
        <div className="video-content">
          <VideoBg playsInline autoPlay loop muted src={video} />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <div className="date">
            <AiFillCalendar size={25} />
            <span>{date_lesson}</span>
          </div>
        </div>
      </CardCourseItems>
    </Col>
  );
}
