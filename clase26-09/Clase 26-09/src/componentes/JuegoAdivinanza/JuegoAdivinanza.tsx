import { useState } from "react";
import UserNumInput from "../InputUsuario/InputUsuario";
import RandomNumGenerator from "../GenerarNumeroAleatorio/GenerarNumeroAleatorio";

const NumGuessGame = ()=>{
    const [userInput, setUserInput] = useState<string>("");
    const [randomNum, setRandomNum] = useState<number>(0);

    const handleUserInputChange = (input: string)=>{
        setUserInput(input);
    };

    const handleRandomNumChange = (num: number) =>{
        setRandomNum(num);
    };

    return(
        <div>
            <UserNumInput onInputChange={handleUserInputChange}/>
            <RandomNumGenerator onNumberGenerated={handleRandomNumChange}/>
            <p>Ingresaste: {userInput}</p>
            <p>Número generado: {randomNum !== 0 ? randomNum : "Número no generado"}</p>
        </div>
    );
};

export default NumGuessGame;