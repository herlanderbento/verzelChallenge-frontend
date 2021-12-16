import { ChangeEvent } from "react";
import { BsMailbox } from "react-icons/bs";
import { Col } from "reactstrap";
import { CardItems } from "./styles";

interface ICardsProps {
  className: string;
  onClick: (e: ChangeEvent) => void;
  name: string;
  lessonCountOne: number;
  lessonCountTwo: number;
}

export function Cards({
  className,
  onClick,
  name,
  lessonCountOne,
  lessonCountTwo,
}: ICardsProps) {
  return (
    <Col lg="12" md="4" sm="6" className="mb-4">
      <CardItems className={className} onClick={onClick}>
        <div className="d-flex">
          <div className="icon icon-color-1">
            <BsMailbox size={28} />
          </div>
          <div className="text">
            <h5 className="title">{name}</h5>
            <p className="desc">
              {lessonCountOne}/{lessonCountTwo} aulas
            </p>
          </div>
        </div>
      </CardItems>
    </Col>
  );
}
