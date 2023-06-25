import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [ShowCart, setShowCart] = useState(false);
    const [ShowSearch, setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    
    const handleScroll = ()=> {
        const offset = window.scrollY; //amount of scroll in y-direction
        if(offset > 200) {
            setScroll(true);
        }else {setScroll(false)}
    }
    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
    },[])

    
    return (
    <>    
    <header className={`main-header ${scroll ? 'sticky-header': ''}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=> {navigate("/")}}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={()=> {navigate("/")}}>SONICHUB</div>
            <div className="right">
                <TbSearch onClick={()=> setShowSearch(true)}/>
                <AiOutlineHeart/>
                <span className="cart-icon " onClick={()=> setShowCart(true)}>
                    <CgShoppingCart/>
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
    {ShowCart && <Cart setShowCart = {setShowCart}/>}
    {ShowSearch && < Search setShowSearch = {setShowSearch}/>}
    </> )
};

export default Header;
