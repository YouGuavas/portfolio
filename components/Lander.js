import { useEffect, useState } from 'react'

import { create, grabElement } from '../utils/_functions'

import styles from '../styles/Home.module.scss'
import words from '../data/words.json'
import letterWords from '../data/letterwords.json'

export default function Lander() {
    const randomize = inputNumber => {
        return Math.floor(Math.random() * inputNumber)
    }
    const [letterWordsState, setLetterWordsState] = useState([])

    //Generate letterwords
    const setLetters = (letters, outerIndex) => {
        letters.map((letter, index) => {
            const thisLetterWords = letterWords[0][letter.toUpperCase()]
            const letterWord =
                thisLetterWords[randomize(thisLetterWords.length)]
            letterWordsState[outerIndex][index] = letterWord
        })
    }

    const addToParent = (parent, child) => {
        //Append child element to parent element
        parent.append(child)
    }

    const clearElement = element => {
        if (element) {
            element.remove()
        }
    }

    const addWordToCard = (word, outerIndex, index, parent) => {
        //add new p element
        const newP = create('p')
        newP.id = `${outerIndex}-${index}-inner`

        //Add new span for letterword and styling
        const newSpan = create('span')
        newSpan.innerHTML = word.slice(1)
        newP.innerHTML = `${word.slice(0, 1)}`

        //Reset the word each time the mouse moves away
        newP.onclick = () => resetWord(outerIndex, index, word)
        addToParent(newP, newSpan)
        addToParent(parent, newP)
    }

    const resetWord = (outerIndex, index, word) => {
        const letter = word.slice(0, 1)
        //Search letterwords by first letter
        const thisLetterWords = letterWords[0][letter.toUpperCase()]
        const letterWord = thisLetterWords[randomize(thisLetterWords.length)]

        const newWordsState = letterWordsState.map((outerItem, outerIdx) => {
            const newArray = outerItem.map((item, innerIndex) => {
                if (index === innerIndex) {
                    return letterWord
                } else {
                    return item
                }
            })
            if (outerIndex === outerIdx) return newArray
            return outerItem
        })
        setLetterWordsState(newWordsState)
    }

    //Render vertical divs for words
    const renderWords = () => {
        const parent = grabElement('titleWrapper')
        letterWordsState.map((word, index) => {
            if (grabElement(`${index}-outer`) !== null) return
            const newDiv = create('div')
            newDiv.id = `${index}-outer`
            parent.append(newDiv)
        })
        return
    }

    //Render the Letters and letterwords
    const renderLetters = () => {
        if (letterWordsState.length > 0) {
            letterWordsState.map((localLetterWords, outerIndex) => {
                const parent = grabElement(`${outerIndex}-outer`) //document.getElementById(`${outerIndex}-outer`);

                localLetterWords.map((letterWord, index) => {
                    const element = grabElement(`${outerIndex}-${index}-inner`)
                    clearElement(element)
                    addWordToCard(letterWord, outerIndex, index, parent)
                })
            })
        }
    }
    useEffect(() => {
        words.map((word, index) => {
            const letters = word.split('')
            letterWordsState[index] = []
            setLetters(letters, index)
            renderWords()
        })
        renderLetters()
    }, [])
    useEffect(() => {
        renderLetters()
    }, [letterWordsState])

    return (
        <section id="Home" className={`${styles.lander}`}>
            <div className={styles.landerOverlay}></div>
            <div
                id="titleWrapper"
                className={`my-rotate ${styles.titleWrapper}`}
            >
                <h1 className={styles.banner}>Patrick Yambrick</h1>
            </div>
        </section>
    )
}
