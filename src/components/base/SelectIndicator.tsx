
function SelectIndicator({
  active
}: {active: boolean}) {
  return (
    <div className="w-4 h-4 rounded-full border-2 border-primary p-0.5">
      <div className={`${active && "bg-primary"} w-full h-full rounded-full`}></div>
    </div>
  )
}

export default SelectIndicator