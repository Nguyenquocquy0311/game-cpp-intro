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
import Download from "@/components/Download";
import Source from "@/components/Source";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Conqueror&rsquo;s Journey</title>
        <meta name="description" content="Giới thiệu về trò chơi" />
        <link rel="icon" href="/img/logo.jfif" />
      </Head>

      <Header/>

      <Hero />
      <Author />
      <Download/>
      <Story />
      <GameObject />
      <HowToPlay/>
      <Source />
      <Plan />

      <Footer/>
    </>
  );
}
