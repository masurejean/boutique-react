
import BuyBtn from "../BuyBtn/BuyBtn";
import "./Card.css";
function Card(props){
    return (<div className="Card">
        <div className="cardPrix">{props.prix}</div>
        <img src={props.cover} className="cardImg"  alt=""></img>
        <h3 className="cardTitle">{props.title}</h3>
        <div className="cardInfo">{props.artist} - {props.genre} -{props.annee}</div>
        <p className="cardDescription">{props.children}</p>
        <div className="cardBtn">
            {/* compenent CardBtn avec */}
            <BuyBtn qte={props.qte}/>
            
        </div>

    </div>


    )
}

export default Card;
