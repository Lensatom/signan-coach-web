
export function Progress({percentage}: {percentage: number}) {
  return (
    <div className="w-full text-left flex flex-col gap-1 font-normal">
      {percentage}% Complete
      <div className="w-full h-2 bg-primary-20 rounded-full">
        <div className="h-full bg-primary rounded-full" style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}