import { useState } from "react";

interface RandomNumGeneratorProps{
    onNumberGenerated: (num: number)=> void;
}

const RandomNumGenerator: React.FC<RandomNumGeneratorProps> = ({onNumberGenerated}) => {
    const [randomNum, setRandomNum] = useState(0);

    const generateRandomNumber = () => {
        const num = Math.floor(Math.random() * 100) + 1;
            setRandomNum(num);
            onNumberGenerated(num);
    };

    return (
        <div>
        <h2>Generador de Número Aleatorio</h2>
        <p>Número generado: {randomNum !== 0 ? randomNum : ""}</p>
        <button onClick={generateRandomNumber}>Generar número</button>
        </div>
    );
};

export default RandomNumGenerator;
