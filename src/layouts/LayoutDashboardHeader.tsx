import { profile } from "@/api";
import { UserProfile } from "@/api/types";
import Logo from "@/assets/logo.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/inc";
import { clearToken } from "@/helpers";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LayoutDashboardHeader() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    clearToken();
    navigate("/dashboard/login");
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await profile();
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const navs = [
    {
      title: "Coaching Dashboard",
      href: "/dashboard",
    },
    {
      title: "Coaching Marketplace",
      href: "/marketplace",
    },
    {
      title: "Home",
      href: "/",
    },
  ];

  return (
    <div>
      <header className="w-full h-[5vh] md:h-[10vh] hidden lg:flex justify-between items-center px-6">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <nav>
            <ul className="hidden md:flex gap-5 items-center">
              {navs.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.href}
                    className="text-grey-text text-xs font-[Montserrat] text-[#3A3A3ACC]"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={user?.avatar || "https://github.com/shadcn.png"}
                        alt={user?.first_name || "User"}
                      />
                      <AvatarFallback>{user?.initials || "CN"}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mr-4">
                    <DropdownMenuLabel className="flex gap-2 items-center mb-4">
                      <Avatar>
                        <AvatarImage
                          src={user?.avatar || "https://github.com/shadcn.png"}
                          alt={user?.first_name || "User"}
                        />
                        <AvatarFallback>
                          {user?.initials || "CN"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <h4 className="text-sm font-medium">
                          {user?.first_name} {user?.last_name}
                        </h4>
                        <span className="text-xs text-grey-text font-normal">
                          {user?.email}
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Help</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default LayoutDashboardHeader;
