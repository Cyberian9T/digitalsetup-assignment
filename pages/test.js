import Head from 'next/head'
import Image from 'next/image'
import Header from "../src/components/Header";
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Newsroom from '../src/components/Newsroom';
import Career from '../src/components/Career';
import KBTG_Life from '../src/components/KBTG_Life';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Setup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main>
        <About />
      </main>
      <Footer />

    </div>
  )
}
