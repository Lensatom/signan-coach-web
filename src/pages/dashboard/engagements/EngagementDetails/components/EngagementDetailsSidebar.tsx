import { NavLink, useParams } from "react-router-dom";

export function EngagementDetailsSidebar() {
  const { id } = useParams()

  const links = [
    { name: "Overview", path: `/dashboard/engagements/${id}/overview` },
    { name: "Engagement Details", path: `/dashboard/engagements/${id}/details` },
    { name: "Goals", path: `/dashboard/engagements/${id}/goals` },
    { name: "Resources", path: `/dashboard/engagements/${id}/resources` },
    { name: "Analytics", path: `/dashboard/engagements/${id}/analytics` },
    { name: "Settings", path: `/dashboard/engagements/${id}/settings` }
  ]

  return (
    <aside className="w-[18%] border px-2 py-4 rounded-lg">
      <nav>
        <ul className="flex flex-col gap-2 text-xs font-medium">
          {links.map(link => (
            <li key={link.name}>
              <NavLink to={link.path} className={({isActive}) => `${isActive && "bg-primary-20"} py-2 px-4 rounded-lg w-full block`}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}