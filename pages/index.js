import Head from 'next/head';
import React from 'react';

import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.scss';
import words from '../data/words.json';
import letterWords from '../data/letterwords.json';


function index() {

  return (
    <div >
      <Head>
        <title>Home | Patrick Yambrick</title>
      </Head>

      <Lander />

    </div>
  );
}

function Lander() {
  const randomize = (inputNumber) => {
    return Math.floor(Math.random() * inputNumber);
  }
  const [letterWordsState, setLetterWordsState] = useState([]);

  const setLetters = (letters, outerIndex) => {
    letters.map((letter, index) => {
      const thisLetterWords = letterWords[0][letter.toUpperCase()];
      const letterWord = thisLetterWords[randomize(thisLetterWords.length)];
      letterWordsState[outerIndex][index] = letterWord;
    })
  }
  const resetWord = (outerIndex, index, word) => {
    const letter = word.slice(0, 1);
    const thisLetterWords = letterWords[0][letter.toUpperCase()];
    const letterWord = thisLetterWords[randomize(thisLetterWords.length)];
    const newLetterWordsState = letterWordsState;
    newLetterWordsState[outerIndex][index] = letterWord;
    console.log(letterWordsState, newLetterWordsState, letterWord);
    setLetterWordsState(newLetterWordsState);
  }


  const renderWords = () => {
    if (typeof document !== "undefined") {
      const parent = document.getElementById('titleWrapper');
      letterWordsState.map((word, index) => {
        if (document.getElementById(`${index}-outer`) !== null) return;
        const newDiv = document.createElement("div");
        newDiv.id = `${index}-outer`;
        parent.append(
          newDiv
        );
      })
      return;
    }
    return <div></div>;
  }

  const renderLetters = () => {
    if (typeof document !== "undefined") {
      if (letterWordsState.length > 0) {
        letterWordsState.map((localLetterWords, outerIndex) => {
          const parent = document.getElementById(`${outerIndex}-outer`);

          localLetterWords.map((letterWord, index) => {
            if (document.getElementById(`${outerIndex}-${index}-inner`) !== null) return;
            const newP = document.createElement("p");
            newP.id = `${outerIndex}-${index}-inner`;
            const newSpan = document.createElement("span");
            newSpan.innerHTML = letterWord.slice(1);
            newP.innerHTML = `${letterWord.slice(0, 1)}`;
            newP.onmouseleave = () => resetWord(outerIndex, index, letterWord);
            newP.append(
              newSpan
            );
            parent.append(
              newP
            );
          })
        })
      }
    }
    return <p></p>;
  }
  useEffect(() => {
    words.map((word, index) => {
      const letters = word.split('');
      letterWordsState[index] = [];
      setLetters(letters, index);
      renderWords();
    })
    renderLetters();
  }, [])
  return (
    <section id="Home" className={`${styles.lander}`}>
      <div className={styles.landerOverlay}>
      </div>
      <div id="titleWrapper" className={`my-rotate ${styles.titleWrapper}`}>
        <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
      </div>
    </section>
  )
}



export default index;