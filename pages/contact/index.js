import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <MainLayout>
      <h1> Contact Page </h1>
          <h1 className='title'>
          
            Ir a <Link href='/about'>About</Link>
          </h1>

          <div className='description'>
            <p>
              Get started by editing&nbsp;
              <code className='code'>pages/index.js</code>
            </p>
          </div>
      </MainLayout>
    </>
  )
}
