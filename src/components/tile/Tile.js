import React from "react";

export const Tile = ({info}) => {
    const infoValues = Object.values(info);
    return (
        <div className="tile-container">
        {infoValues.map((info, i) => (
            <p className={i === 1 ? "tile-title" : "tile"} key={i}>{info}</p>
        ))}
        </div>
    );
};