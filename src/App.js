import React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";
import { FaTwitterSquare, FaTumblrSquare } from 'react-icons/fa';

const QuoteBox = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [color, setRandomColor] = useState("#fff")

  useEffect(() => {
      async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
        const colors = [
          "#16a085",
          "#27ae60",
          "#2c3e50",
          "#f39c2",
          "#e74c3c",
          "#9b59b6",
          "#FB6964",
          "#342224",
          "#472E32",
          "#BDBB99",
          "#77B1A9",
          "#73A857",
        ];
        let randomColor = Math.floor(Math.random() * colors.length);
        setRandomColor(colors[randomColor])

        setQuotes(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex])
      
      }
      fetchData();
  }, [])

  const getNewQuote = () => {
      const colors = [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c2",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857",
      ];
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randomIndex])
    setRandomColor(colors[randomColor])
  }
  return (
    <>
  <div className="background" style={{backgroundColor: color, minHeight: "100vh"}}>
  <div id="quote-box">
    <div> 
    {randomQuote ? (
      <>
      <div id="text" style={{color: color}}>&quot;{randomQuote.text}&quot;</div>
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