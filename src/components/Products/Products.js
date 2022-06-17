
import Card from "../Card/Card";
import { playlist } from "../../playlist";
import "./Products.css";

function Products(props){
    return(
        <div>
            <h2>vos produits</h2>
            <div className="cardContainer">

                {   playlist.map(function(value,key){
                    return(<Card
                        key={key}
                        cover={value.cover}
                        title={value.title}
                        artist={value.artist}
                        genre={value.genre}
                        annee={value.annee}
                        prix= {value.prix}
                        qte={value.qte}>
                            {value.description}
                        </Card>)
                })}
                


            </div>
        </div>
    )
}
export default Products;