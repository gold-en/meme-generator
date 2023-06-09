import React from 'react';
import '../styles/meme.css';
// import memeData from '../memeData';
// I destructured the memeData which is an object, then destructured the data property which is an object to get the memes property which is an array then renamed it to memesArray
// const {
//   success,
//   data: { memes: memesArray },
// } = memeData;

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNo = Math.trunc(Math.random() * allMemes.length);
    console.log(allMemes);
    const url = allMemes[randomNo].url;
    setMeme(preMeme => ({
      ...preMeme,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getMemeImage} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;

//useEffect with async function//
// React.useEffect(() => {
//   async function getMemes() {
//     const res = await fetch('https://api.imgflip.com/get_memes');
//     const data = await res.json();
//     setAllMemes(data.data.memes);
//   }
//   getMemes();
// }, []);
