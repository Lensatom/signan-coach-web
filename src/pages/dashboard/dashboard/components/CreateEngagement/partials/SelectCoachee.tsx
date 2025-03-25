import { Button, SelectIndicator } from "@/components/base";
import { Avatar, AvatarFallback, AvatarImage, Icon } from "@/components/inc";
import { useContext } from "react";
import { CreateEngagementContext } from "../context";

export const SelectCoachee = () => {
  const { data, setData }:any = useContext(CreateEngagementContext)
  const {
    coachee
  } = data

  const users = [
    { 
        fullname: "John Doe", 
        imageUrl: "https://randomuser.me/api/portraits/men/1.jpg", 
        email: "john.doe@example.com", 
        _id: "1" 
    },
    { 
        fullname: "Jane Smith", 
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg", 
        email: "jane.smith@example.com", 
        _id: "2" 
    },
    { 
        fullname: "Alice Johnson", 
        imageUrl: "https://randomuser.me/api/portraits/women/3.jpg", 
        email: "alice.johnson@example.com", 
        _id: "3" 
    },
  ];

  const handleClickCoachee = (_id:string) => {
    const coacheeIndex = coachee.indexOf(_id)
    const isSelected = coacheeIndex !== -1

    if (isSelected) {
      const existingCoachee = [...coachee]
      existingCoachee.splice(coacheeIndex, 1)
      setData((prev:any) => ({
        ...prev,
        coachee: existingCoachee
      }))
    } else {
      setData((prev:any) => ({
        ...prev,
        coachee: [...prev.coachee, _id]
    }))
    }
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="px-4 py-3 rounded-lg bg-input flex items-center gap-2">
        <Icon name="search_blue" padding={0} size={14} />
        <input className="border-0 outline-0 bg-transparent text-xs placeholder:text-input-text/50" placeholder="Type to search or select from list" />
      </div>

      <div className="flex flex-col">
        {users.map((user) => {
          const isSelected = coachee.indexOf(user._id) !== -1
          return (
            <div key={user._id} onClick={() => handleClickCoachee(user._id)} className="flex justify-between items-center cursor-pointer hover:bg-input/80 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={user.imageUrl}
                    alt={user.fullname}
                  />
                  <AvatarFallback>{user.fullname[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[11px] font-medium">{user.fullname}</p>
                  <p className="text-[10px]">{user.email}</p>
                </div>
              </div>
              <SelectIndicator active={isSelected} /> 
            </div>
          )
        })}
      </div>

      <div className="flex justify-end mt-10">
        <Button size="sm" variant="outline" className="rounded-lg font-medium">Create A New Cochee</Button>
      </div>
    </div>
  )
}