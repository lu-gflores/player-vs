// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
export async function getStaticProps() {


}