import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({inputList}) => {
    return (
        <div>
            {inputList.length > 0
                ? inputList.map((obj, i) => (
                    <Tile info={obj} key={i} />
                ))
                : null}
        </div>
    );
};
