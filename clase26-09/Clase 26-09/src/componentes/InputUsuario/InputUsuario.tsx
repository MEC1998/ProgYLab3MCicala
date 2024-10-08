import { useState } from "react";

interface UserNumInputProps{
    onInputChange: (input: string)=>void;
}

const UserNumInput: React.FC<UserNumInputProps> = (onInputChange) => {
    const [userInput, setUserInput] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setUserInput(inputValue);
        onInputChange(inputValue);
    };

    return (
    <div>
        <h2>Adivina el número</h2>
        <input
        type="number"
        placeholder="Ingresa un número"
        value={userInput}
        onChange={handleInputChange}
        />
        <p>Ingresaste: {userInput}</p>
        </div>
    );
};

export default UserNumInput;
