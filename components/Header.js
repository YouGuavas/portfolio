import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share'
import { useEffect } from 'react'
import logo from '../public/images/logoDark.png'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Header.module.scss'
const buttonSize = 24

const FBButton = props => {
    const { url, text } = props
    return (
        <FacebookShareButton
            className={styles.shareButton}
            url={url}
            quote={text}
        >
            <FacebookIcon size={buttonSize} round={true} />
        </FacebookShareButton>
    )
}
const TweetButton = props => {
    const { url, text } = props
    return (
        <TwitterShareButton
            className={styles.shareButton}
            url={url}
            hashtags={['PatrickYambrick', 'WebDevelopment', 'React']}
        >
            <TwitterIcon size={buttonSize} round={true} />
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
            <Link name="Logo Home" href="#Home" scroll={false}>
                <Image
                    alt="My personal logo"
                    className="my-logo"
                    height={96}
                    width={96}
                    src={logo.src}
                />
            </Link>
            <FBButton url={url} quote={text} />
        </header>
    )
}
