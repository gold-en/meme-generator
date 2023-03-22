import React from 'react';
import '../styles/meme.css';
import memeData from '../memeData';
// I destructured the memeData which is an object, then destructured the data property which is an object to get the memes property which is an array then renamed it to memesArray
const {
  success,
  data: { memes: memesArray },
} = memeData;

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesArray);

  const getMemeImage = () => {
    const randomNo = Math.trunc(Math.random() * allMemeImages.length);
    const randomImageUrl = allMemeImages[randomNo].url;
    setMeme(preMeme => ({
      ...preMeme,
      randomImage: randomImageUrl,
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
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
