/* eslint-disable react/jsx-no-comment-textnodes */
import { StarCheck } from "../StarCheck/StarCheck";

export const Profile = (props: any) => {
  const name = "Ashoka Tano";
  const nickname = "Fulcrum";
  const checked = true;
  const image =
    "https://i.etsystatic.com/7745761/r/il/2369e6/3663232312/il_1588xN.3663232312_dxif.jpg";
  return (
    <div className="d-flex align-items-center">
      <div>
        <img src={image} height={70} width={70} alt="user-pic" />
      </div>
      <div className="text-start" style={{ lineHeight: 1 }}>
        <p className="mb-0">
          {name} {checked && <StarCheck />}
        </p>
        <p>{nickname}</p>
      </div>
    </div>
  );
};
