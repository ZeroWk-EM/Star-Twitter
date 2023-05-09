import replyIMG from "../../asset/reply.png";
import likeIMG from "../../asset/like.png";
import shareIMG from "../../asset/share.png";

interface SocialProps {
  reply: number;
  like: number;
  share: string;
}

const Social = (props: SocialProps) => {
  const { reply, like, share } = props;
  return (
    <div className="d-flex flex-row justify-content-around gap-2">
      <div>
        <p>Reply</p>
        <img src={replyIMG} width={25} height={25} alt="reply icon" />
        <p><b>{reply}</b></p>
      </div>
      <div>
        <p>Like</p>
        <img src={likeIMG} width={25} height={25} alt="like icon" />
        <p><b>{like}</b></p>
      </div>
      <div>
        <p>Share</p>
        <img src={shareIMG} width={25} height={25} alt="share icon" />
        <p><b>{share}</b></p>
      </div>
    </div>
  );
};

export default Social;
