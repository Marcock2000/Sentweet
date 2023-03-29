import React, { useState } from "react";
import { motion} from 'framer-motion';







export default function SentimentAnalysis() {
  const [query, setQuery] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);


  interface SentimentData {
    positive: string;
    neutral: string;
    negative: string;
  }
  
  const [sentiment, setSentiment] = useState<SentimentData | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  
    fetch("https://marcovrc2000.pythonanywhere.com/sentiment-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, start_date, end_date, limit }),
    })
      .then((response) => response.json())
      .then((data: SentimentData) => {
        setSentiment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };


  return (


  <div className="flex flex-col items-center ">
  <div className="w-8/12  sm:w-max md:w-max rounded-md ">
    <h2 className="text-2xl font-bold mb-6">SenTweet</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sky-50 font-bold mb-2"
              htmlFor="query"
            >
              Query
            </label>
            <input
              className="placeholder-gray-400 appearance-none border rounded w-full py-2 px-3 text-black "
              id="query"
              type="text"
              placeholder="#fullstack"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sky-50 font-bold mb-2"
              htmlFor="start-date"
            >
              Start Date
            </label>
            <input
              className="placeholder-sky-950 appearance-none border rounded w-full py-2 px-3 text-black"
              id="start-date"
              type="date"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sky-50 font-bold mb-2"
              htmlFor="end-date"
            >
              End Date
              </label>
            <input
              className="placeholder-sky-950 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:-outline"
              id="end-date"
              type="date"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sky-50 font-bold mb-2"
              htmlFor="limit"
            >
              Limit
            </label>
            <input
              className=" appearance-none border rounded w-full text-black py-2 px-3 leading-tight focus:outline-none focus:-outline"
              id="limit"
              type="number"
              min="1"
              max="10000"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className= "hover:bg-gray-200 text-gray-600 bg-gray-300 font-semibold py-2 px-3 rounded-lg text-sm sm:text-base md:text-lg border border-sky-400"
              type="submit"
            >
              Analyze
            </button>
          </div>
        </form>

          {loading && (
              <div className="flex items-center font-mono font-semibold mt-4 justify-center">
              Analyzing tweets...
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-2"
              >
                🐦
              </motion.div>
            </div>)}
        

        {sentiment !== null && (
          <div className="mt-8">
            <h3 className="font-bold text-center text-xl mb-2"> Results:</h3>
            <div className="flex flex-row items-center justify-center">
              <div className="text-center">
                <p className="font-bold justify-center">Positive:</p>
                <p className="justify-center">{sentiment.positive}% </p>
                <p className="justify-center">😃</p>

              </div>
              <div className="text-center mx-10">
              <p className="font-bold justify center">Neutral:</p>
                <p className="justify-center">{sentiment.neutral}% </p>
                <p className=" justify-center">😐</p>

              </div>
              <div className="text-center">
                <p className="font-bold">Negative:</p>
                <p className=" justify-center">{sentiment.negative}% </p>
                <p className=" justify-center">😔</p>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
