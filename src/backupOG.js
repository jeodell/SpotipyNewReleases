import React, { useState, useEffect } from 'react'
import FilterArtist from './FilterArtist'
import FilterDate from './FilterDate'
import Albums from './Albums'
import './App.css'

function App() {
  let today = new Date()
  const [numFollowed, setNumFollowed] = useState(0)
  const [user, setUser] = useState({
    name: '',
  })
  const [artists, setArtists] = useState([
    {
      name: '',
      href: '',
      albums: [],
    },
  ])
  const [filterString, setFilterString] = useState('')
  let currentFilterDate =
    today.getMonth() - 2 === 0
      ? today.getFullYear() - 1
      : today.getFullYear() +
        '-' +
        ('0' + (today.getMonth() - 2 === 0 ? 12 : today.getMonth() - 2)).slice(
          -2,
        ) +
        '-' +
        ('0' + today.getDate()).slice(-2)
  const [filterDate, setFilterDate] = useState(currentFilterDate)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const userResponse = await fetch('/get-user')
    const userJson = await userResponse.json()
    console.log(userJson)
    setUser({
      name: userJson.display_name,
    })

    const artistsResponse = await fetch('/get-artists')
    const artistsJson = await artistsResponse.json()
    console.log(artistsJson)
    setArtists((artists) => [...artists, ...artistsJson.artists])
    setNumFollowed(numFollowed + artistsJson.artists.length)
  }

  // array of followed artists
  let artistsToRender =
    user && artists // checks if there is a user that follows at least one artist
      ? artists.filter(
          (artists) =>
            artists.name !== '' &&
            artists.name.toLowerCase().includes(filterString.toLowerCase()),
        )
      : []

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          {numFollowed !== 0 ? (
            <div>
              <h1 className='home-page-header'>{user.name}'s New Releases</h1>
              <h2 className='artist-counter'>{numFollowed} followed artists</h2>
              <div className='filter'>
                <FilterArtist
                  onTextChange={(text) => {
                    setFilterString(text)
                  }}
                />
                <FilterDate onChange={(date) => setFilterDate(date)} />
              </div>
              {artistsToRender.map((artist) => (
                <Albums
                  key={artist.name}
                  artist={artist}
                  filterDate={filterDate}
                />
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </header>
      </div>
    </>
  )
}

export default App
