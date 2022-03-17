// Encabezado de la Pagina 
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserWidget from "./UserWidget";

//harcodeado
const isLogin = true

const Header = () => {
    return (

        <div className="container-fluid bg-light">
            <div class="row justify-content-md-center">
                <div className="col-3">

                {
                    isLogin ?
                        <NavBar isLogin={isLogin}/>
                        : <></>
                }
                </div>
                <Logo />
                <UserWidget />
            </div>
        </div>

    );
}

export default Header;