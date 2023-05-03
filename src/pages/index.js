
import CardComponent from '@/component/CardComponent'
import HeaderComponent from '@/component/HeaderComponent'
import NavbarComponent from '@/component/NavbarComponent'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderComponent />
    </>
  )
}