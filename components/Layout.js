import Head from 'next/head'
import { userRouter } from 'next/router'
export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
        </div>
    )
}
Layout.defaultProps = {
    title: 'PlayerVS | Find Your Next ESport Tournament',
    description: "Search and Compete In Esport Tournaments",
    keywords: 'esports, tourneys, tournament, playervs, competition '
}