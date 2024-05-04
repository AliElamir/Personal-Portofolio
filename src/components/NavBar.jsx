const NavBar = () => {
  return (
    <div className=" flex justify-between h-36 items-center pr-12">
      <div>
        <img className=" h-32" src="src\assets\logo.png" alt="logo" />
      </div>
      <div className="flex p-4 gap-12 flex-row-reverse text-2xl">
        <p>Contact</p>
        <p>About</p>
        <p>Projects</p>
        <p>Home</p>
      </div>
    </div>
  )
}

export default NavBar
