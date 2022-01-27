import { useState, useEffect } from 'react'
import r from "components/htm_create";

function TopAninme() {
  const [topAnime, setTopAnime] = useState([])

  const GetTopAnime = async () => {
    await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json()).then(d=> setTopAnime(d.top.slice(0,5)))
  }
  useEffect(() => {
    GetTopAnime();
  }, [])

  return r `
    <nav className='px-4'>
      <h3 className='text-2xl text-purple-900 mb-2 font-bold'>Top 5 Anime</h3>
      ${(topAnime != null) ? (topAnime.map((anime) => r ` 
        <a 
          href=${anime.url} 
          className='block px-2 py-2 text-slate-300 bg-black mb-2 rounded-xl transition duration-300 hover:bg-purple-900 hover:text-pink-500'
          target="_blank" 
          rel="noreferrer" 
          key=${anime.mal_id}
          >${anime.title}</a>`)) : ''}
    </nav>
  `
}

export default TopAninme
