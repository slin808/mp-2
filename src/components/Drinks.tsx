import styled from "styled-components";
import {Drink} from "../interfaces/Drink.ts";
// Div for all the drinks
const AllDrinksDiv=styled.div`
display: flex;
flex-flow: row wrap;    
justify-content: space-evenly;
background-color: darksalmon;
`;
// Div for a single drink
const SingleDrinkDiv=styled.div<{stralcoholic: string, strcategory: string}>`
display: flex;
flex-direction: column;   
justify-content: center;
max-width: 32%;
padding: 2%;
margin: 2%;
background-color: ${(props)=>(props.stralcoholic === "Non alcoholic" ? 'yellow' : 'burlywood')};
color: ${(props) => (props.strcategory === "Cocktail" ? 'green' : 'black')};
border: 12px darkred solid;
font: italic small-caps bold calc(2px + 1vw) "Curlz MT", SansSerif;
text-align: center;
`;
// Drinks component
export default function Drinks(props : { data:Drink[] } ){
return (
    <AllDrinksDiv >
        {
            props.data.map((drink: Drink) =>
                <SingleDrinkDiv key={drink.idDrink} stralcoholic={drink.strAlcoholic} strcategory={drink.strCategory}>
                    <h1>{drink.strDrink}</h1>
                    <h3>{drink.strCategory}</h3>
                    <img src={drink.strDrinkThumb} alt={`image of ${drink.strDrinkThumb}`} />
                    <p>{drink.strAlcoholic}</p>
                </SingleDrinkDiv>
            )
        }
    </AllDrinksDiv>
);
}