import { API_URL } from '@/config/index'
import Layout from '@/components/Layout'
import TournamentItem from '@/components/TournamentItem'
export default function Tournaments({ events }) {

    return (
        <Layout>
            <h1>Tournaments</h1>
            {events.length === 0 && <h2>No Tournaments avaliable right now.</h2>}
            {events.map(tr => (
                <TournamentItem key={tr.id} tour={tr} />
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    return {
        props: { events },
        revalidate: 1
    }
}