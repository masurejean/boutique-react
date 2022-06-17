import MenuBtn from "../MenuBtn/MenuBtn";
import "./Menu.css";

function Menu(props) {
    return ( <nav>
                <ul >
                    <li ><MenuBtn ><i className='fa-solid fa-house-user'></i>Home</MenuBtn> </li> 
                    <li ><MenuBtn ><i className='fa-solid fa-compact-disc'></i> vinyl</MenuBtn></li> 
                    <li onClick={props.action}><MenuBtn ><i className='fa-solid fa-cart-arrow-down'></i></MenuBtn></li></ul > 
            </nav>
    );
}

export default Menu;