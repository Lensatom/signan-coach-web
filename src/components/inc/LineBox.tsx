
function LineBox({ children, className }: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6 ${className}`}>
      {children}
    </div>
  )
}

export default LineBox