import React from "react";

const ChartItem = function({song}) {
    return (
        <li>
            <p>{song['im:name'].label}</p>
            <p>{song['im:artist'].label}</p>
        </li>
    )
};

export default ChartItem;