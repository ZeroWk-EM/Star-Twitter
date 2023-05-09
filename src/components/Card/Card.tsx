/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { INews } from "../../interface/news.interface";
import { StarCheck } from "../StarCheck/StarCheck";
import Social from "../social/Social";

const Card = (props: INews) => {
  const {
    author: { name, image, nickname, checked },
    content,
    reply,
    liked,
    share,
  } = props;

  return (
    <div className="d-flex flex-column mb-4 align-items-start">
      <div className="d-flex">
        <div>
          <img
            className="border border-warning rounded-circle"
            style={{ objectFit: "cover" }}
            src={image}
            height={60}
            width={60}
            alt="user-pic"
          />
        </div>
        <div className="text-start" style={{ marginLeft: "1rem" }}>
          <p className="mb-0">
            <b>{name}</b> {checked && <StarCheck />}
          </p>
          <p>{nickname}</p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src={content.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">{content.description}</p>
        </div>
        <Social name={name} reply={reply} like={liked} share={share} />
      </div>
    </div>
  );
};

export default Card;
