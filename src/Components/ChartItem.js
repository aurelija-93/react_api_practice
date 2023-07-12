import React from "react";

const ChartItem = function({song}) {
    return (
        <li className="chart-item">
            <h2 className="song-title">{song['im:name'].label}</h2>
            <h3 className="song-author">-{song['im:artist'].label}</h3>
        </li>
    )
};

export default ChartItem;