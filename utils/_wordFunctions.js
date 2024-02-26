import { create, grabElement } from './_functions'

//Render vertical divs for words
const renderWords = letterWordsState => {
    const parent = grabElement('titleWrapper')
    letterWordsState.map((word, index) => {
        if (grabElement(`${index}-outer`) !== null) return
        const newDiv = create('div')
        newDiv.id = `${index}-outer`
        parent.append(newDiv)
    })
    return
}

export { renderWords }
