
function Navbar() {
    return (
        <div className="navbar flex items-center justify-between p-8 border-b-[1px] border-[#E6E6E8]">
            <div>
                <h1>HEADING</h1>
            </div>
            <div className='flex items-center justify-center gap-[15px]'>
                <img className='navbar-profile-image' src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" alt="" />
                <div className='navbar-profile-name'>User Name</div>
            </div>
        </div>
    )
}

export default Navbar