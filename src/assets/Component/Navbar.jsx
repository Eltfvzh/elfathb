import logo from "../Image/Apple-logo-removebg-preview.png"

function Navbar() {

    return (
        <div className="main-nav">
            <div className="nav1">
                <img src={logo} alt="" />
            </div>
            <div className="nav2">
                <p>main</p>
                <p>content</p>
                <p>footer</p>
            </div>
        </div>
    )
}

export default Navbar