import Link from 'next/link'
import Image from 'next/image'

export default function TournmentItem({ tour }) {
    return (
        <section>
            <Image src={tour.image ? tour.image : '/images/stock/sample4.jpg'} width={170} height={100} />
        </section>
    )
}