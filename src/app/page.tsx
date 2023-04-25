import { Layout } from '@/components/Layout'
import { NavBar } from '@/components/NavBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen'>
      <NavBar/>
      <main className="flex items-center text-black">
        <Layout>
          <div className='flex items-center justify-between w-full'>

          </div>
        </Layout>
      </main>
    </div>

  )
}
