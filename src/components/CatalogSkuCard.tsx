import "./CatalogSkuCard.scss";
import React from "react";

interface ICatalogSkuCardProps {
    product:{
        image: string;
        display_name: string;
        code:string
    }
};

const CatalogSkuCard: React.FC<ICatalogSkuCardProps> = (props: ICatalogSkuCardProps) => {

    return (
        <div className="skuGridCell">
            <div className="image" style={{ backgroundImage: `url(${props.product.image})` }}>

            </div>
            <div className="detail">
            <div className="name">{props.product.display_name}</div>
                <div className="code">SKU: {props.product.code}</div>
            </div>
        </div>
    );
};

export default CatalogSkuCard;