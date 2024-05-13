import React, { createContext, useState } from "react";
const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [songpath, setSongpath] = useState(null);

  const [currCategory, setCurrentCategory] = useState(
    "http://localhost:8080/home"
  );

  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const searching = (data) => {
    console.log("searched data is");
    console.log(data);
    setSearchData(data);
    setSearch(true);
  };

  console.log("category is /:" + currCategory);
  // console.log("path is " + songpath);
  const currsong = (path) => {
    setSongpath(path);
  };

  const changeCategory = (category) => {
    // console.log(category);
    setCurrentCategory(category);
  };

  return (
    <MusicContext.Provider
      value={{
        currsong,
        songpath,
        currCategory,
        changeCategory,
        search,
        searchData,
        searching,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };
