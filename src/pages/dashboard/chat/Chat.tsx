import { LineBox } from "@/components/inc"
import { ChatBox, ChatUserItem } from "./components";
import { Header } from "../components";

function Chat() {

  const inbox = [
    {
        id: 1,
        name: "James Kanayon",
        message: "You're Welcome",
        profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
        onlineStatus: true,
        unreadMessages: 1
    },
    {
        id: 2,
        name: "Sophia Bennett",
        message: "Hey, how's it going?",
        profilePicture: "https://randomuser.me/api/portraits/women/20.jpg",
        onlineStatus: false,
        unreadMessages: 3
    },
    {
        id: 3,
        name: "Liam Anderson",
        message: "See you soon!",
        profilePicture: "https://randomuser.me/api/portraits/men/30.jpg",
        onlineStatus: true,
        unreadMessages: 0
    },
    {
        id: 4,
        name: "Olivia Martinez",
        message: "Just finished work!",
        profilePicture: "https://randomuser.me/api/portraits/women/40.jpg",
        onlineStatus: false,
        unreadMessages: 5
    },
    {
        id: 5,
        name: "Ethan Carter",
        message: "Let's catch up soon.",
        profilePicture: "https://randomuser.me/api/portraits/men/50.jpg",
        onlineStatus: true,
        unreadMessages: 2
    },
    {
        id: 6,
        name: "Mia Robinson",
        message: "Can't wait for the weekend!",
        profilePicture: "https://randomuser.me/api/portraits/women/60.jpg",
        onlineStatus: true,
        unreadMessages: 0
    },
    {
        id: 7,
        name: "Noah Wilson",
        message: "Just sent you the files.",
        profilePicture: "https://randomuser.me/api/portraits/men/70.jpg",
        onlineStatus: false,
        unreadMessages: 4
    },
    {
        id: 8,
        name: "Ava Johnson",
        message: "Thanks for the help!",
        profilePicture: "https://randomuser.me/api/portraits/women/80.jpg",
        onlineStatus: true,
        unreadMessages: 1
    },
    {
        id: 9,
        name: "William Brown",
        message: "Meeting at 3 PM, right?",
        profilePicture: "https://randomuser.me/api/portraits/men/90.jpg",
        onlineStatus: false,
        unreadMessages: 0
    },
    {
        id: 10,
        name: "Emma Davis",
        message: "Let's plan something fun!",
        profilePicture: "https://randomuser.me/api/portraits/women/100.jpg",
        onlineStatus: true,
        unreadMessages: 2
    }
  ];

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <Header title="Chat" />
      <LineBox className="h-screen">
        <section className="h-full grid grid-cols-7 pt-24">
          <div className="col-span-5">
            <ChatBox {...inbox[0]} />
          </div>
          <div className="col-span-2 h-full border border-gray-200 rounded-md overflow-y-auto">
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Messages</h3>
              <div className="border-2 outline-border-grey rounded-md py-1 px-3">
                <input className="flex w-full border-none outline-none text-sm" />
              </div>
            </div>
            {inbox.map((chat) => <ChatUserItem {...chat} />)}
          </div>
        </section>
      </LineBox>
    </div>
  )
}

export default Chat