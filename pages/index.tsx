import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Author from "@/components/Author";
import Story from "@/components/Story";
import GameObject from "@/components/GameObject";
import Plan from "@/components/Plan";
import Head from "next/head";
import Header from "@/components/Header";
import HowToPlay from "@/components/HowToPlay";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conqueror's Journey</title>
        <meta name="description" content="Giới thiệu về trò chơi Hành Trình Chinh Phục" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="overflow-hidden">
        <Hero />
        <Author />
        <Story />
        <GameObject />
        <HowToPlay/>
        <Plan />
      </main>

      <Footer/>
    </div>
  );
}
