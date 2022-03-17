import Logo from "./Logo";
<<<<<<< HEAD
=======
import NavBar from "./NavBar";
import UserWidget from "./UserWidget";
>>>>>>> 98852808d5480b3ae0ce63c97e4459f3101c2f7f

const Header = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row justify-content-md-center">
                <NavBar/>
                <Logo />
                <UserWidget />
            </div>
        </div>
    );
}

export default Header;