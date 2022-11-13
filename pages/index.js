import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  const url= `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <h1 className='font-bold'>Hello</h1>
    </div>
  )
}
