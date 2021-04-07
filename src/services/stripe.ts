import Stripe from "stripe"
import { version } from "../../package.json"

export const stripe = new Stripe(
    "sk_test_3nRuuMaOm52ym2nSCFCvmxNO0084YM914D",
    {
        apiVersion: "2020-08-27",
        appInfo: {
            name: "IGNEWS",
            version: version
        }
    }
);