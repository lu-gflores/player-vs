import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import styles from '@/styles/Layout.module.css'
export default function Layout({ title, keywords, description, children }) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && <Hero />}
            <div className={styles.container}>
                {children}

            </div>
            <Footer />
        </div>
    )
}


Layout.defaultProps = {
    title: 'PlayerVS | Find Your Next ESport Tournament',
    description: "Search and Compete In Esport Tournaments",
    keywords: 'esports, tourneys, tournament, playervs, competition '
}