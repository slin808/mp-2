import Drinks from "./components/Drinks.tsx";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import {Drink} from "./interfaces/Drink.ts";


const WrapperDiv=styled.div`
    width: 82vw;
    margin: auto;
    padding: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 12px darkgoldenrod solid;
`;


export default function App() {
    // useState hook for state management of games
    const [data, setData] = useState<Drink[]>([]);
    
    // useEffect hook for error handling and effects when rendering and rerendering
    useEffect(() => {
      async function fetchData(): Promise<void> {
          const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
          const dataJson = await rawData.json()
          console.log(dataJson)
          setData(dataJson.drinks);
      }
      fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was the error: " + e));
      }, []);
    return (
        <>
            <h1 style={{textAlign: 'center', fontSize: '5vw', color: 'darkgoldenrod'}}>Drinks</h1>
            <p style={{textAlign: 'center', fontSize: '2vw', color: 'yellow'}}>Non-alcoholic drinks highlighted in yellow</p>
            <p style={{textAlign: 'center', fontSize: '2vw', color: 'green'}}>Green text for cocktails</p>
            <WrapperDiv>
                <Drinks data={data}/>
            </WrapperDiv>
        </>
    )
}


