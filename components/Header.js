import Link from 'next/link'
import styles from '@/styles/Header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
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
