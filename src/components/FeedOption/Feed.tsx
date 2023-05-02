/* eslint-disable jsx-a11y/anchor-is-valid */
import ExploreIMG from "../../asset/explore.png";
import OptionIMG from "../../asset/option.png";

const Feed = () => {
  return (
    <div className="text-start">
      <h4>Explore the Galaxy</h4>
      <ul className="nav flex-column">
        <li className="nav-item d-flex" style={{ lineHeight: 1 }}>
          <img src={ExploreIMG} height={30} width={30} alt="explore" />
          <a className="nav-link active" aria-current="page" href="#">
            Explore
          </a>
        </li>
        <li className="nav-item d-flex mt-2" style={{ lineHeight: 1 }}>
          <img src={OptionIMG} height={30} width={30} alt="option" />
          <a className="nav-link" href="#">
            Option
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Feed;
