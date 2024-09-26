import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct{
    precio: number
    imagen: string
    nombre: string
}

interface IPropsListProducts{
    arrItems: ItemProduct[]
}

export const ListProduct: FC<IPropsListProducts> = ({arrItems}) => {
    return (
<div className="p-4 n-3 border rounded d-grid gap-2" style={{gridTemplateColumns: "reppear(2, 1fr)", justifyItems:"center", alignItems:"center"}}>
    {
        arrItems.map((el, i)=>(
            <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.imagen} />
                <Card.Body>
                    <Card.Title>{el.nombre}</Card.Title>
                    <Card.Text>
                        ${el.precio}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }
</div>
    )
};
