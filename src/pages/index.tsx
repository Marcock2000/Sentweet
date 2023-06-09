import { type NextPage } from "next";
import Head from "next/head";
import SentimentAnalysis from "~/components/SentimentAnalysis";




const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title> SenTweet</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/avatar-1.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-sky-800">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
             <span className="text-sky-200 ">Sentweet</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            >
              <div className="text-lg">
              UPDATE: Due to Twitter&apos;s recent decision to remove the ability to search for tweets without paying for their API, this app is no longer functional. I will be looking into other ways to make this app work again. Thanks Elon 😡 ...
              </div>
              <h3 className="text-xl font-bold">What is this?</h3>

              <div className="text-lg">
              If you&apos;re looking for a way to analyze sentiments on Twitter, look no further! SenTweet is here to help.
              </div>
              <h3 className="text-xl font-bold">Usage</h3>
              <div className="text-lg">
               Enter your query as a hashtag (e.g. #covid19), a time range and the number of tweets you want to analyze.
               If you want to analyze a large number of Tweets, expect a larger response times ( &gt; 1000 Tweets).
              </div>
            </div>
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            >
            <SentimentAnalysis />
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

