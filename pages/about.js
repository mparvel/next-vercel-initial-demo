import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'



export default function AboutPage() {
  return (
    <>
        <h1> About Page </h1>
          <h1 className='title'>
            Ir a <Link href='/'>Home</Link>
          </h1>

          <div className='description'>
            <p>
              Get started by editing&nbsp;
              <code className='code'>pages/index.js</code>
            </p>
          </div>
    </>
  )
}

AboutPage.getLayout = function getLayout( page ){
  return (
      <MainLayout>
          <DarkLayout>
              { page }
          </DarkLayout>
      </MainLayout>
  )
}