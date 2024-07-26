import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion as m } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Transition from '../components/TransitionComponent';

const ImageBackgroundDetector = ({ imageUrl, hex }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imageUrl;

    image.onload = () => {
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      let count = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        sumR += imageData[i];
        sumG += imageData[i + 1];
        sumB += imageData[i + 2];
        count++;
      }

      const averageR = Math.round(sumR / count);
      const averageG = Math.round(sumG / count);
      const averageB = Math.round(sumB / count);

      const [red, green, blue] = darkenedColor(averageR, averageG, averageB, 1);

      const hexCode = rgbToHex(red, green, blue);

      hex(hexCode);
    };
  }, [imageUrl, hex]);
  const darkenedColor = (r, g, b, factor) => {
    const darkenedR = Math.round(r * factor);
    const darkenedG = Math.round(g * factor);
    const darkenedB = Math.round(b * factor);

    return [darkenedR, darkenedG, darkenedB];
  };

  const rgbToHex = (r, g, b) =>
    `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;

  return <canvas className="hidden" ref={canvasRef} />;
};

function Music() {
  const [data, setData] = useState(null);
  const [clickedTitle, setClickedTitle] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [seacrhTerm, setSearchTerm] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const [gradient, setGradient] = useState('rgba(10, 10, 10, 0.2)');
  const [loadingMusic, setLoadingMusic] = useState(false);
  const [loadingLyric, setLoadingLyric] = useState(false);
  const loadingAnimation = <FontAwesomeIcon icon={faSpinner} spinPulse />;

  const scrollRef = useRef(null);

  function force_scroll_sideways(element) {
    element.addEventListener('wheel', (event) => {
      event.preventDefault();

      let [x, y] = [event.deltaX, event.deltaY];
      let magnitude;

      if (x === 0) {
        magnitude = y > 0 ? -30 : 30;
      } else {
        magnitude = x;
      }
      magnitude = -magnitude;
      element.scrollBy({
        left: magnitude,
      });
    });
  }
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      force_scroll_sideways(element);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', force_scroll_sideways);
      }
    };
  }, []);

  const resetState = () => {
    setLoadingMusic(true);
    setLyric(null);
    setClickedTitle(null);
    setGradient('rgba(10, 10, 10, 0.2)');
    document.querySelector('#title').innerHTML = clickedTitle;
  };

  const setHex = (hex) => {
    setGradient(hex);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelect = async (id, title) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-music-api3.p.rapidapi.com/music/lyrics/plain',
      params: { id: id },
      headers: {
        'X-RapidAPI-Key': '4be055ecf0msh9fc241db90da9c7p1f1136jsn67e8e3c422af',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com',
      },
    };

    try {
      setLoadingLyric(true);
      setCurrentImage(image);
      const response = await axios.request(options);
      const lyric = response.data.description.runs[0].text.replace(
        /\n/g,
        '<br>'
      );
      await setLyric(lyric);
      await setClickedTitle(title);
      document.querySelector('#title').innerHTML = clickedTitle;
      setLoadingLyric(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHover = (item) => {
    document.querySelector('#title').innerHTML = item.title;
    setImage(item.thumbnail);
    // console.log(image);
  };

  const handleHoverOut = () => {
    document.querySelector('#title').innerHTML = clickedTitle;
  };

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://youtube-music-api3.p.rapidapi.com/search',
      params: {
        q: seacrhTerm,
        type: 'song',
      },
      headers: {
        'X-RapidAPI-Key': '4be055ecf0msh9fc241db90da9c7p1f1136jsn67e8e3c422af',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com',
      },
    };

    try {
      resetState();
      document.querySelector('#title').innerHTML = clickedTitle;

      const response = await axios.request(options);

      setLoadingMusic(false);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Transition />
      <div
        className="flex flex-col justify-center items-center h-screen w-screen gap-5 overflow-y-hidden text-[white]"
        style={{
          background: `linear-gradient( ${gradient}, rgba(10, 10, 10, 0.1)`,
          transition: 'background 0.8s ease-in-out',
        }}
      >
        <div>
          <div id="title" className="h-[10px] mb-[13px]"></div>
          <hr />
        </div>

        {loadingLyric ? (
          <center>{loadingAnimation}</center>
        ) : (
          <>
            {lyric && (
              <div
                id="lyric"
                className="h-[300px] w-[500px] overflow-y-scroll text-xl font-bold scroll-smooth"
                dangerouslySetInnerHTML={{ __html: lyric }}
              ></div>
            )}
          </>
        )}
        <div>
          <m.input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={onKeyPress}
            placeholder="Search..."
            whileTap={{ scale: 1.1 }}
            className="lg:w-[200px] lg:h-[35px] bg-transparent border rounded-2xl px-2 text-[white]"
          />
        </div>
        <div
          ref={scrollRef}
          className="  flex grid-rows-3 gap-4 flex-nowrap overflow-x-scroll w-screen py-3 overflow-y-hidden "
        >
          {loadingMusic ? (
            <center className="w-screen  min-h-[200px]">
              {loadingAnimation}
            </center>
          ) : data && data.result && data.result.length > 0 ? (
            data.result.map((item) => (
              <div
                key={item.videoId}
                onClick={() => {
                  handleSelect(item.videoId, item.title);
                }}
                className="cursor-pointer flex flex-col justify-center items-center overflow-y-hidden min-w-[170px] min-h-[200px] overflow-x-hidden"
              >
                <m.img
                  whileHover={{ scale: 1.3 }}
                  onMouseEnter={() => {
                    handleHover(item);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut();
                  }}
                  className="mb-[10px] rounded-2xl w-[100px] h-[100px]"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="max-w-[150px] max-h-[50px] truncate transition-all duration-300 group-hover:invisible">
                  {item.title}
                </div>
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 invisible group-hover:visible bg-white p-4"
                  style={{ zIndex: 1 }}
                >
                  {item.title}
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
        <ImageBackgroundDetector imageUrl={currentImage} hex={setHex} />
      </div>
    </>
  );
}

export default Music;
