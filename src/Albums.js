import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  albumList: {
    display: 'inline-block',
    listStyle: 'none',
  },
  albumContent: {
    backgroundColor: '#424242',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  albumCover: {
    width: '400px',
    height: '400px',
    [theme.breakpoints.down('md')]: {
      width: '275px',
      height: '275px',
    },
  },
  description: {
    width: '375px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      width: '250px',
      height: '200px',
    },
  },
  albumTitle: {
    fontSize: '1.25rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  artistName: {
    fontSize: '1.25rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  releaseDate: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.75rem',
    },
  },
  releaseDate: {
    color: '#e0e0e0',
  },
  cardButton: {
    backgroundColor: '#1DB954',
    '&:hover': {
      backgroundColor: 'rgba(30,215,96,0.8)',
    },
  },
}))

export default function Albums(props) {
  let artist = props.artist
  let filterDate = props.filterDate
  let albumsFiltered = artist.albums.filter(
    (album) => album.release_date >= filterDate,
  )
  const classes = useStyles()
  if (albumsFiltered.length === 0) {
    return <></>
  }

  return (
    <>
      {albumsFiltered.map((albums, index) => (
        <li className={classes.albumList} key={index}>
          <div className={classes.albumContent}>
            <img
              className={classes.albumCover}
              src={albums.images[0].url}
              title={albums.name}
              alt={albums.name}
            />
            <div className={classes.description}>
              <div className={classes.albumTitle}>{albums.name}</div>
              <div className={classes.artistName}>{artist.name}</div>
              <div className={classes.releaseDate}>
                Release Date: {albums.release_date}
              </div>
              <Link
                href={albums.external_urls.spotify}
                target='_blank'
                rel='noopener'
                underline='none'
              >
                <Button
                  className={classes.cardButton}
                  variant='contained'
                  size='small'
                >
                  Open In Spotify
                </Button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  )
}
