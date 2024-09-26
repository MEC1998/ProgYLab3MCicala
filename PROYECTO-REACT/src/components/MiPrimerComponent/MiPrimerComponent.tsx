import { FC } from "react"

interface IPrompsMiPrimerComponent{
    text:string;
    color:string;
    fontSize?: number;
}

export const MiPrimerComponent:FC <IPrompsMiPrimerComponent>= ({text, color, fontSize}) => {
    return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}>
        <p>{text}</p>
    </div>
    );
};
