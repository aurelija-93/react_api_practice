import React, { useState } from "react";
import ChartList from "../Components/ChartList";

const ChartBox = function() {
    const [songs, setSongs] = useState('');

    

    return (
        <>
            <h1>iTunes UK Top 20 Chart</h1>
            <ChartList songs={songs}/>
        </>
    );
};

export default ChartBox;