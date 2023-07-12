import React, { useEffect, useState } from "react";
import ChartList from "../Components/ChartList";
import Filter from "../Components/Filter";

const ChartBox = function() {
    const genreList = [
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ];

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs('All');
    }, [])

    const getSongs = async function(genreName) {
        const foundGenre = genreList.find(genre => genre.name === genreName);
        const url = foundGenre.url;
        const res = await fetch (url);
        const songs = await res.json();
        setSongs(songs.feed.entry);
    }

    return (
        <>
            <h1>iTunes UK Top 20 Chart</h1>
            <Filter genreList={genreList} getSongs={getSongs}/>
            <ChartList songs={songs} />
        </>
    );
};

export default ChartBox;