import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { fauna } from '../../../services/fauna'
import { query } from 'faunadb'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],

  jwt: {
    signingKey: process.env.SIGNIN_KEY,
  },
  callbacks: {
    async signIn(user, account, profile) {
      const { email, name } = user;
      try {
        await fauna.query(
          query.If(
            // CONDIÇÃO
            query.Not(
              query.Exists(
                query.Match(
                  query.Index("user_by_email"),
                  query.Casefold(email)
                )
              )
            ),
            // TRUE
            query.Create(
              query.Collection("users"),
              { data: { email, name } }
            ),
            // FALSE
            query.Get(
              query.Match("user_by_email"),
              query.Casefold(email)
            )
          )


        )


        return true
      } catch { return false; }

    },
  }



})