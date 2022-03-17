import { Routes, Route } from "react-router-dom";

const Routers = () => {
    return (      
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/create' element={<CreateAccount />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Routers;

