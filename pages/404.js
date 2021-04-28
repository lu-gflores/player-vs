import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'

export default function NotFound() {
    return (
        <Layout title='Page Not Found'>
            <h1>404</h1>
            <h3>Nothing here mate!</h3>
            <Link href='/'>Head Back Home</Link>
        </Layout>
    )
}
