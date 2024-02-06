import { useNavigate } from "react-router-dom";

export default function ChatBubble(props) {
  const navigate = useNavigate();

  let { createdAt, content, senderUsername, chatImg } = props;
  // let { senderId, currentUserId, createdAt, content} = props

  let senderId = 1;
  let currentUserId = 1;
  chatImg=true
  senderUsername
  return (
    <div className="mt-2">
      {/* MAP LIST OF MESSAGES */}

      <div
        className={
          "chat" + (senderId == currentUserId ? " chat-end" : " chat-start")
        }
      >
        <div
          onClick={() => navigate(`/profile/${senderId}`)}
          className="chat-image avatar cursor-pointer"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">{createdAt}</time>
        </div>
        <div className="chat-bubble bg-slate-200">
          {content ? content : "MESSAGES"}
          {chatImg ? (
            <img
              className="min-w-48 max-w-full object-center object-contain rounded"
              src="https://i.pinimg.com/originals/fb/a1/b7/fba1b7a007c0160a17a6d0e41697df66.jpg"
            ></img>
          ) : null}
        </div>
      </div>
    </div>
  );
}
