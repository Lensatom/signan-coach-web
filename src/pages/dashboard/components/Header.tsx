
function Header({title}:{title:string}) {
  return (
    <section className="flex justify-between items-center mt-0 md:mt-6">
      <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
    </section>
  )
}

export default Header