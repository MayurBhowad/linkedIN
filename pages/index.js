import { signOut } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-gray-900'>
      <Head>
        <title>LinkedIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          {/* Sidebar */}
          {/* Feed */}
        </div>
        {/* Widgets */}
      </main>
    </div>
  )
}
