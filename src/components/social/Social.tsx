import replyIMG from "../../asset/reply.png";
import likeIMG from "../../asset/like.png";

interface SocialProps {
  name: string;
  reply: number;
  like: number;
  share: string;
}

const Social = (props: SocialProps) => {
  const { name, reply, like, share } = props;
  const dynamcModal = `modal_open-${name.split(" ").slice(0,-1)}`.toLowerCase();

  return (
    <div className="d-flex flex-row justify-content-around gap-2">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-6">
            <p>Reply</p>
            <img src={replyIMG} width={25} height={25} alt="reply icon" />
            <p>
              <b>{reply}</b>
            </p>
          </div>
          <div className="col-6 col-lg-6">
            <p>Like</p>
            <img src={likeIMG} width={25} height={25} alt="like icon" />
            <p>
              <b>{like}</b>
            </p>
          </div>
          <div className="d-grid gap-2 col-12 col-lg-12">
            <button
              className="btn btn-dark mt-3 mb-3"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#${dynamcModal}`}
            >
              Share post
            </button>
          </div>
          <div
            className="modal fade"
            id={dynamcModal}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Share {name} post
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <a href={share}>Click here to copy the link</a>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Share on internet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
