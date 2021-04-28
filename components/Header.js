import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div>
                <Link href='/'>
                    <a>PlayerVS</a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/tournaments'>
                            <a>Tournaments</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
