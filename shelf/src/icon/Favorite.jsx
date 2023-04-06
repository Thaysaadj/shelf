import { useState } from "react"

export default function Favorite() {
  const [favorite, setFavorite] = useState(false)

  return (
    <button className={`iconFavorite ${favorite ? "checked" : "" }`}  onClick={() => { setFavorite(!favorite) }}>
      <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.1494 2.8566C22.5629 2.268 21.8667 1.8011 21.1003 1.4825C20.334 1.164 19.5126 1 18.6831 1C17.8535 1 17.0321 1.164 16.2658 1.4825C15.4994 1.8011 14.8032 2.268 14.2167 2.8566L12.9997 4.0775L11.7826 2.8566C10.5981 1.6682 8.9915 1.0006 7.3163 1.0006C5.6411 1.0006 4.0346 1.6682 2.85 2.8566C1.6655 4.0449 1 5.6566 1 7.3372C1 9.0177 1.6655 10.6295 2.85 11.8178L4.0671 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.7622C24.8366 8.9934 25 8.1694 25 7.3372C25 6.505 24.8366 5.681 24.519 4.9122C24.2015 4.1434 23.7361 3.4449 23.1494 2.8566Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  )
}