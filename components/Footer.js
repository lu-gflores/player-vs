import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; <Link href='https://github.com/lu-gflores' target='_blank'>George Flores 2021</Link></p>
        </footer>
    )
}
