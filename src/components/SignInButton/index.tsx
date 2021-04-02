import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from "./styles.module.scss"
import { useState } from "react"

export function SignInButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return isLoggedIn ? (
        <button
            className={styles.signInButton}
            type="button">
            <FaGithub color="#04d361" />
            Pedro Balbino
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.signInButton}
            type="button">
            <FaGithub color="#eba417" />
            Sign In With Github
        </button>
    )
}