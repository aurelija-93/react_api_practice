import React, { useEffect, useState } from "react";
import ChartList from "../Components/ChartList";

const ChartBox = function() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = async function() {
        const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
        const songs = await res.json();
        setSongs(songs.feed.entry);
    }

    return (
        <>
            <h1>iTunes UK Top 20 Chart</h1>
            <ChartList songs={songs}/>
        </>
    );
};

export default ChartBox;