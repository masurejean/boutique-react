import"./BuyBtn.css"
function BuyBtn(props) {
    return <button disabled ={props.qte ? false:true}>
        {props.qte ? "Acheter":"Rupture"}<i className="fa-solid fa-cart-arrow-down"></i>
    </button>
    
    
    
}

export default BuyBtn;