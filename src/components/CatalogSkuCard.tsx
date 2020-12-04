import "./CatalogSkuCard.scss";
import React from "react";

interface ICatalogSkuCardProps {};

const CatalogSkuCard: React.FC<ICatalogSkuCardProps> = (props: ICatalogSkuCardProps) => {

    return (
        <div className="skuGridCell">
            <div className="image">

            </div>
            <div className="detail">
                <div className="name">Minneli Loveseat</div>
                <div className="code">SKU: SF235J45K56K</div>
            </div>
        </div>
    );
};

export default CatalogSkuCard;