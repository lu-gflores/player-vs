import Layout from '@/components/Layout'

export default function Tournaments() {
    return (
        <Layout>
            <h1>My Tournaments</h1>
        </Layout>
    )
}

const res = await fetch(`${API_URL}/api/events`)
const events = await res.json()

return {
    props: { events },
    revalidate: 1
}