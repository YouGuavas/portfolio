import { TwitterShareButton } from 'react-twitter-embed'
import { FacebookShareButton } from 'react-share'
import { useEffect } from 'react'
import styles from '../styles/Header.module.scss'

const FBButton = props => {
    const { url, text } = props
    return (
        <FacebookShareButton
            className={styles.shareButton}
            url={url}
            quote={text}
        >
            Share on FB
        </FacebookShareButton>
    )
}
const TweetButton = props => {
    const { url, text } = props
    return (
        <TwitterShareButton
            className={styles.shareButton}
            url={url}
            options={{ text: text }}
        >
            Tweet
        </TwitterShareButton>
    )
}
export default function Header() {
    const url = 'https://patrickyambrick.com/'
    const text =
        'Do you or somebody you know need a website for a small business? Contact Patrick!'
    const scrollTop = () => {
        //returns current scroll position
        if (typeof window !== 'undefined') {
            return window.scrollY
        }
    }
    const handleScroll = () => {
        const container = document.getElementById('collapsible-header')
        const currentScroll = scrollTop()
        if (currentScroll > 50) {
            container.classList.remove(styles.open)
            container.classList.add(styles.collapse)
            if (container.classList.contains(styles.open)) {
                setTimeout(() => {
                    container.style.display = 'none'
                }, 200)
            }
        } else {
            container.style.display = 'flex'
            container.classList.remove(styles.collapse)
            container.classList.add(styles.open)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <header id="collapsible-header" className={styles.header}>
            <TweetButton url={url} text={text} />
            <FBButton url={url} quote={text} />
        </header>
    )
}
