import DateFnsUtils from '@date-io/date-fns/build'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { Fragment, useEffect, useState } from 'react'
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
    today.getMonth() === 0
      ? today.getFullYear() - 1
      : today.getFullYear() +
        '-' +
        ('0' + (today.getMonth() === 0 ? 12 : today.getMonth())).slice(-2) +
        '-' +
        ('0' + today.getDate()).slice(-2)
  const [filterDate, setFilterDate] = useState(currentFilterDate)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // const userResponse = await fetch('http://127.0.0.1:5000/api/get-user')
      const userResponse = await fetch('https://spotipy-new-releases-backend.vercel.app/api/get-user')
      // const userResponse = await fetch('https://spotipynewreleasesbackend.herokuapp.com/api/get-user')
      const userJson = await userResponse.json()
      // console.log(userJson)
      setUser({
        name: userJson.display_name,
      })

      // const artistsResponse = await fetch('http://127.0.0.1:5000/api/get-artists')
      const artistsResponse = await fetch('https://spotipy-new-releases-backend.vercel.app/api/get-artists')
      // const artistsResponse = await fetch('https://spotipynewreleasesbackend.herokuapp.com/api/get-artists')
      const artistsJson = await artistsResponse.json()
      // console.log(artistsJson)
      setArtists((artists) => [
        ...artists,
        ...artistsJson.artists.sort((a, b) => {
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        }),
      ])
      setNumFollowed(numFollowed + artistsJson.artists.length)
    }

    fetchData().catch((err) => setError(true))
  }, [numFollowed])

  // array of followed artists
  let artistsToRender =
    user && artists // checks if there is a user that follows at least one artist
      ? artists.filter(
          (artists) => artists.name !== '' && artists.name.toLowerCase().includes(filterString.toLowerCase()),
        )
      : []

  const handleDateChange = (event) => {
    let date = event.toLocaleDateString()
    let values = date.split('/')
    let year = values[2]
    let day = values[1]
    let month = values[0]
    let newFilterDate = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2)
    setFilterDate(newFilterDate)
  }

  const useStyles = makeStyles((theme) => ({
    centered: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    user: {
      marginTop: '25px',
      marginBottom: '10px',
    },
    followedArtists: {
      marginBottom: '10px',
    },
    artistFilter: {
      marginRight: '10px',
      marginBottom: '10px',
    },
    dateFilter: {
      marginBottom: '50px',
    },
    grid: {
      gridAutoRows: '1fr',
    },
    footer: {
      padding: theme.spacing(5, 2),
      marginTop: '50px',
      borderTop: '1px solid rgba(240,240,240,0.2)',
    },
  }))
  const classes = useStyles()

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    overrides: {
      MuiInputLabel: {
        root: {
          '&$focused': {
            color: '#fff',
          },
        },
      },
      MuiInput: {
        underline: {
          '&:after': {
            borderBottom: '2px solid white',
          },
        },
      },
    },
  })

  darkTheme.typography.h2 = {
    fontSize: '2.4rem',
    '@media (min-width:600px)': {
      fontSize: '3.0rem',
    },
    [darkTheme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
  }

  darkTheme.typography.h3 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [darkTheme.breakpoints.up('md')]: {
      fontSize: '3.0rem',
    },
  }

  return (
    <div className="App">
      {numFollowed !== 0 ? (
        <ThemeProvider theme={darkTheme}>
          <Container maxWidth="xl">
            <Typography variant="h2" component="h1" className={classes.user}>
              {user.name}'s New Releases
            </Typography>
            <Typography variant="h3" component="h3" className={classes.followedArtists}>
              {numFollowed} followed artists
            </Typography>
            <TextField
              className={classes.artistFilter}
              label="Filter by Artist Name"
              onChange={(text) => {
                setFilterString(text.target.value)
              }}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.dateFilter}
                disableFuture
                label="Filter by Release Date"
                value={filterDate}
                placeholder={filterDate}
                format="MM/dd/yyyy"
                onChange={(event) => handleDateChange(event)}
              />
            </MuiPickersUtilsProvider>
            <Grid className={classes.grid}>
              {artistsToRender.map((artist, index) => (
                <Albums key={`${artist.name}${index}`} artist={artist} filterDate={filterDate} />
              ))}
            </Grid>
          </Container>
          <footer className={classes.footer}>
            <Typography variant="body2">
              {'Copyright © '}
              {new Date().getFullYear()} Jason O'Dell
            </Typography>
          </footer>
        </ThemeProvider>
      ) : error ? (
        <Fragment>
          <Container className={classes.centered}>
            <Typography variant="h3">Error</Typography>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <Container className={classes.centered}>
            <CircularProgress size={80} />
          </Container>
        </Fragment>
      )}
    </div>
  )
}

export default App
