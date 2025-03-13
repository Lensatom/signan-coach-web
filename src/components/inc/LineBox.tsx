
function LineBox({ children }: {children: React.ReactNode}) {
  return (
    <div className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
      {children}
    </div>
  )
}

export default LineBox