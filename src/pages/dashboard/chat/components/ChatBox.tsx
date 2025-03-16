import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";

interface Props {
  name: string;
  profilePicture: string;
  message: string;
  unreadMessages: number;
  onlineStatus: boolean;
}


const messages = [
  {
      senderId: 1,
      senderName: "Alice",
      photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      message: "Hey Bob, how's your day going?",
      timestamp: "2025-03-16T10:00:00Z"
  },
  {
      senderId: 2,
      senderName: "Bob",
      photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      message: "Hey Alice! It's going great, just working on some projects. How about you?",
      timestamp: "2025-03-16T10:02:00Z"
  },
  {
      senderId: 1,
      senderName: "Alice",
      photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      message: "Nice! I'm just relaxing and reading a book. What project are you working on?",
      timestamp: "2025-03-16T10:05:00Z"
  },
  {
    senderId: 1,
    senderName: "Alice",
    photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "That sounds really useful! I might need something like that. Let me know when it's ready!",
    timestamp: "2025-03-16T10:10:00Z"
  },
  {
      senderId: 2,
      senderName: "Bob",
      photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      message: "I'm building a small web app for tracking habits. Trying to make it simple and effective!",
      timestamp: "2025-03-16T10:07:00Z"
  },
  {
      senderId: 1,
      senderName: "Alice",
      photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      message: "That sounds really useful! I might need something like that. Let me know when it's ready!",
      timestamp: "2025-03-16T10:10:00Z"
  }
]




function ChatBox({
  name,
  profilePicture,
  onlineStatus
}:Props) {

  const user = {
    id: 1
  }

  return (
    <div className='h-full flex flex-col justify-between pr-10 pl-6'>
      <div className="flex items-center space-x-2 -mt-6">
        <div className="relative">
          <img
            src={profilePicture}
            alt={name}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{name}</h3>
          {onlineStatus && <p className="text-gray-600 text-xs">Online</p>}
        </div>
      </div>

      <div className="h-full flex flex-col gap-2 mt-5">
        {messages.map((message, index) => (
          <Message
            key={index}
            {...message}
            isMe={message.senderId === user.id}
            showName={index === 0 ? true : messages[index - 1].senderId !== message.senderId}
          />
        ))}
      </div>

      <div>
        <div className="h-12 rounded-md bg-gray-100 flex items-center">
          <input placeholder="Type your message" className="flex w-full border-none outline-none text-sm bg-transparent px-4 placeholder:text-grey-text" />
        </div>
      </div>
    </div>
  )
}

type MessageProps = any
const Message = ({
  message,
  isMe,
  showName,
  photoUrl,
  senderName
}:MessageProps) => {
  return (
    <div className="flex flex-col gap-1">
      {showName && (
        <div className={`${isMe ? "justify-end flex-row-reverse ml-auto" : "justify-start"} flex gap-2 items-center`}>
          <Avatar className="w-6 h-6">
            <AvatarImage
              src={photoUrl}
              alt={senderName}
            />
            <AvatarFallback>{senderName[0]}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium">{senderName}</span>
        </div>
      )}
      <div className={`${isMe ? "justify-end" : "justify-start"} flex w-full`}>
        <p className={`${isMe ? "bg-primary text-white text-right" : "bg-primary-20"} text-sm max-w-[80%] rounded-lg p-3`}>{message}</p>
      </div>
    </div>
  )
}

export default ChatBox