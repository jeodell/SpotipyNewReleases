import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'inline-flex',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#424242',
    color: '#fff',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: 'center',
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
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {albumsFiltered.map((albums, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={albums.images[0].url}
                title={albums.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom component='h6'>
                  {albums.name}
                </Typography>
                <Typography>{artist.name}</Typography>
                <Typography>Release Date: {albums.release_date}</Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
