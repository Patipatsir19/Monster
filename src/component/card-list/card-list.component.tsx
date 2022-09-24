import Card from "../card/card.component";

import { Monster } from "../../App";

import "./card-list.styles.css"

type CardlistPros = {
        monster: Monster[];
}


const Cardlist = ({monster}: CardlistPros) => (
        <div className="card-list">
            {monster.map((monster)=>{
                    return(
                        <Card key={monster.id} monster={monster} />
                        )})}
                </div>)

export default Cardlist;