import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.scss';
import words from '../data/words.json';
import letterWords from '../data/letterwords.json';

export default function Lander() {
    const randomize = (inputNumber) => {
        return Math.floor(Math.random() * inputNumber);
    }
    const [letterWordsState, setLetterWordsState] = useState([]);


    //Generate letterwords
    const setLetters = (letters, outerIndex) => {
        letters.map((letter, index) => {
            const thisLetterWords = letterWords[0][letter.toUpperCase()];
            const letterWord = thisLetterWords[randomize(thisLetterWords.length)];
            letterWordsState[outerIndex][index] = letterWord;
        })
    }


    const resetWord = (outerIndex, index, word) => {
        const letter = word.slice(0, 1);
        //Search letterwords by first letter
        const thisLetterWords = letterWords[0][letter.toUpperCase()];
        const letterWord = thisLetterWords[randomize(thisLetterWords.length)];
        let newLetterWordsState = [[...letterWordsState]];
        //
        newLetterWordsState[outerIndex][index] = letterWord;
        setLetterWordsState([...newLetterWordsState]);
        alert("is: " + letterWordsState[outerIndex][index] + " should be: " + letterWord + " changing: " + outerIndex + '-' + index);
    }

    //Render vertical divs for words
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

    //Render the Letters and letterwords
    const renderLetters = () => {
        if (typeof document !== "undefined") {
            if (letterWordsState.length > 0) {
                letterWordsState.map((localLetterWords, outerIndex) => {
                    const parent = document.getElementById(`${outerIndex}-outer`);

                    localLetterWords.map((letterWord, index) => {
                        if (document.getElementById(`${outerIndex}-${index}-inner`) !== null) return;

                        //add new p element
                        const newP = document.createElement("p");
                        newP.id = `${outerIndex}-${index}-inner`;

                        //Add new span for letterword and styling
                        const newSpan = document.createElement("span");
                        newSpan.innerHTML = letterWord.slice(1);
                        newP.innerHTML = `${letterWord.slice(0, 1)}`;

                        //Reset the word each time the mouse moves away
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
    useEffect(() => {
        renderLetters();
        console.log(letterWordsState);
    }, [letterWordsState]);

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
