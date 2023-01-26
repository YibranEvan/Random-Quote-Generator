import React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";
import { FaTwitterSquare, FaTumblrSquare } from 'react-icons/fa';
const QuoteBox = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [color, setRandomColor] = useState("#fff");
  const [wallpaper, setWallpaper] = useState("");
  useEffect(() => {
      async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
        const colors = [
          "#16A085",
          "#27AE60",
          "#2C3E50",
          "#f39c2",
          "#E74C3C",
          "#9B59B6",
          "#FB6964",
          "#342224",
          "#472E32",
          "#BDBB99",
          "#77B1A9",
          "#73A857",
        ];
        const wallpapers = [
          "https://cdn.discordapp.com/attachments/966491171142631444/1067572843170250813/Smash_4k_inspirational_wallpaper_74bfc580-fe40-44d5-87b3-bdd584f4ba6d.png",
          "https://cdn.discordapp.com/attachments/966491171142631444/1067573203117031585/Smash_4k_inspirational_wallpaper_2dbdab82-3be8-4c29-a56f-bbab997af134.png",
          "https://cdn.discordapp.com/attachments/966491171142631444/1067921040107393075/Smash_4k_inspirational_background_a3261e6a-c784-4d6f-949e-9905ecad0cad.png",
          "https://cdn.discordapp.com/attachments/966491171142631444/1067921481415266435/Smash_4k_inspirational_background_4f19137a-92f8-44a8-a518-c06c8f641872.png",
          "https://cdn.discordapp.com/attachments/966491171142631444/1067921495545880647/Smash_4k_inspirational_background_f8be3c4f-1305-4914-8959-7255802d6c16.png",
          "https://cdn.discordapp.com/attachments/966491171142631444/1067921783791046756/Smash_4k_inspirational_background_371ad996-1a76-4f4f-9027-f66c6b99c378.png"
        ];
        let randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length);
        setWallpaper(wallpapers[randomWallpaperIndex]);
        let randomColor = Math.floor(Math.random() * colors.length);
        setRandomColor(colors[randomColor])
        setQuotes(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex])
      }
      fetchData();
  }, []);
  const getNewQuote = () => {
    const colors = [
      "#16A085",
      "#27AE60",
      "#2C3E50",
      "#f39c2",
      "#E74C3C",
      "#9B59B6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    const wallpapers = [
      "https://cdn.discordapp.com/attachments/966491171142631444/1067572843170250813/Smash_4k_inspirational_wallpaper_74bfc580-fe40-44d5-87b3-bdd584f4ba6d.png",
      "https://cdn.discordapp.com/attachments/966491171142631444/1067573203117031585/Smash_4k_inspirational_wallpaper_2dbdab82-3be8-4c29-a56f-bbab997af134.png",
      "https://cdn.discordapp.com/attachments/966491171142631444/1067921040107393075/Smash_4k_inspirational_background_a3261e6a-c784-4d6f-949e-9905ecad0cad.png",
      "https://cdn.discordapp.com/attachments/966491171142631444/1067921481415266435/Smash_4k_inspirational_background_4f19137a-92f8-44a8-a518-c06c8f641872.png",
      "https://cdn.discordapp.com/attachments/966491171142631444/1067921495545880647/Smash_4k_inspirational_background_f8be3c4f-1305-4914-8959-7255802d6c16.png",
      "https://cdn.discordapp.com/attachments/966491171142631444/1067921783791046756/Smash_4k_inspirational_background_371ad996-1a76-4f4f-9027-f66c6b99c378.png"
    ];
    let randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length);
    setWallpaper(wallpapers[randomWallpaperIndex]);
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
    let randomColor = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomColor]);
  }
  return (
    <>
      <div
        className="background"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover"
        }}
      >
        <div id="quote-box" className="white-box">
          <div>
            {randomQuote ? (
            <>
            <div id="text" className="quoteText" style={{color: color}}>&quot;{randomQuote.text}&quot;</div>
            <div id="author" className="authorName" style={{color: color}}>- {randomQuote.author || "Unknown"}</div>
            </>
          ) : (
            <h2>Loading</h2>
          )}
          <div id="rowWrap">
              <button className="newQuoteBtn" onClick={getNewQuote} style={{background: color, color: "white"}}> New Quote</button>
            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&quotes,freecodecamp&caption=" +
            encodeURIComponent(randomQuote.author) +
            "&content=" +
            encodeURIComponent(randomQuote.text) +
            "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
            }
              target="_blank">
              <FaTumblrSquare className="icon" style={{color: color, fontSize: "2.5em"}}/>
            </a>
            <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent(
              '"' + randomQuote.text + '" ' + randomQuote.author
              )
            }
              target="_blank">
              <FaTwitterSquare className="icon" style={{color: color, fontSize: "2.5em"}}/>
              </a>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
const App = () => {
  return (
    <>
    <div>
      <QuoteBox/>
    </div>
    </>
  )
}
render(<App />, document.getElementById("root"));