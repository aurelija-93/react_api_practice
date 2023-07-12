import React from "react";
import ChartItem from "./ChartItem";

const ChartList = function({songs}) {
    const songItems = songs.map((song, index) => {
        return (
            <ChartItem song={song} key={index} />
        )
    });

    return (
        <div className="chart-list">
            <ol>
                {songItems}
            </ol>
        </div>
    )
};

export default ChartList;