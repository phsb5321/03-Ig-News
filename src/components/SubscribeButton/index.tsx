import { signIn, useSession } from "next-auth/client"
import { api } from "../../services/api";

import styles from "./styles.module.scss"

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession();

    function handleSubscribe() {
        if (!session) {
            signIn('github')
            return
        }

        try {
            const response = await api.post("/sunscribe")
            const { sessionId } = response.data
        } 

    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}>
            Subscribe
        </button>
    )
}
