import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";

interface Props {
  name: string;
  profilePicture: string;
  message: string;
  unreadMessages: number;
  onlineStatus: boolean;
}

function ChatUserItem({
  name,
  profilePicture,
  message,
  unreadMessages,
  onlineStatus
}:Props) {

  return (
    <div className="flex items-start justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src={profilePicture}
              alt={name}
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          {onlineStatus && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="text-gray-600 text-xs">{message}</p>
        </div>
      </div>
      {unreadMessages > 0 && (
        <span className="min-w-4 h-4 text-xs text-white bg-primary rounded-full text-center align-middle mt-2">
          {unreadMessages}
        </span>
      )}
    </div>
  )
}

export default ChatUserItem