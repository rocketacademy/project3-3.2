import { useNavigate } from "react-router-dom";

export default function Prototyping(props) {
  const navigate = useNavigate();

	let { createdAt, content, senderUsername,} = props
	// let { senderId, currentUserId, createdAt, content} = props

	let senderId = 1
	let currentUserId = 1
  return (
    <>
      {/* MAP LIST OF MESSAGES */}

      <div
        className={
          "chat" + (senderId == currentUserId ? " chat-end" : " chat-start")
        }
      >
        <div onClick={()=>`/profile/${senderId}`} className="chat-image avatar cursor-pointer">
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
        <div className="chat-bubble bg-slate-200">{content? content: "MESSAGES"}</div>
      </div>
    </>
  );
}
