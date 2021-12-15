import { AiFillHeart, AiFillEye, AiOutlineCalendar } from "react-icons/ai";
import { Card } from "./styles";

interface ICardEvents {
  avatar?: string;
  author: string;
  func: string;
  images: string;
  category: string;
  likes?: string;
  views?: string;
  title: string;
  date?: string;
  bgCategory?: string;
}

export function CardEvents({
  avatar,
  author,
  func,
  images,
  category,
  likes,
  views,
  title,
  date,
  bgCategory,
}: ICardEvents) {
  return (
    <Card>
      <div className="header">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="header-desc">
          <span className="author">{author}</span>
          <small className="function">{func}</small>
        </div>
      </div>
      <div className="body">
        <figure className="images">
          <img src={images} className="img-fluid" alt="images" />
          <figcaption className="img-description">
            <div className="category">
              <label className={`${bgCategory}`}>{category}</label>
            </div>
            <div className="icons">
              <ul className="icon-items">
                <li>
                  <label>
                    <AiFillHeart className="heart" size={18} />
                    <span>{likes}</span>
                  </label>
                </li>
                <li>
                  <label>
                    <AiFillEye size={18} />
                    <span>{views}</span>
                  </label>
                </li>
              </ul>
            </div>
          </figcaption>
        </figure>
        <div className="description">
          <h3 className="title">{title}</h3>
          <ul className="desc-items">
            <li>
              <AiOutlineCalendar size={18} />
              <span>{date}</span>
            </li>
            {/* <li>
              <GoLocation size={18} />
              <span>Cine Africa, Hoji-Ya-Henda, Luanda.</span>
            </li>
            <li>
              <BiMoney size={18} />
              <span>2000kz</span>
            </li> */}
          </ul>
        </div>
      </div>
    </Card>
  );
}
