import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import Container from '@mui/material/Container';
import { artistBio } from '../api/const';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';


function ArtistBio() {
  const params = useParams();
  const [artist, setArtist] = useState([]);

  const getCollection = async () => {
    const temp = [];
    const querySnapshot = await getDocs(collection(db, 'artistBio'));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setArtist(temp);
  };
  useEffect(() => {
    getCollection().then();
  }, []);

  console.log(artist)

  return (
    <Container>
      {artist.map(
        (x) => {
          if (x.id == params.id) {
            return (
              <Stack>
                <Box
                  mt={3}
                  p={2}
                  sx={{
                    boxShadow: '0 2px 4px rgb(150, 149, 149)',
                    borderRadius: '10px',
                  }}
                >
                  <Typography variant="h5">
                    {x.nikname}
                    {' '}
                    (
                    {' '}
                    {x.name}
                    {' '}
                    )
                    {' '}
                  </Typography>
                  <Grid container spacing={3} mt={1}>

                    <Grid item xs={3}>
                      <Image
                        src={`/images/artist${params.id}.jpg`}
                        fit="cover"
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Grid container>
                        <Typography mr={1}>Карьера:</Typography>
                        <Typography>{x.career}</Typography>
                      </Grid>
                      <Grid container>
                        <Typography mr={1}>Дата рождения:</Typography>
                        <Typography>{x.bithday}</Typography>
                      </Grid>
                      <Grid container>
                        <Typography mr={1}>Возраст:</Typography>
                        <Typography>{x.data}</Typography>
                      </Grid>
                      <Grid container>
                        <Typography mr={1}>Место рождения:</Typography>
                        <Typography>{x.location}</Typography>
                      </Grid>
                      <Grid container>
                        <Typography mr={1}>Рост:</Typography>
                        <Typography>{x.height}</Typography>
                      </Grid>
                      <Grid container>
                        <Typography mr={1}>Семейное положение:</Typography>
                        <Typography>{x.family}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                <Box mt={5}>
                  <Typography variant="h2" mb={2}>Биография</Typography>
                  <Typography>{x.bioText}</Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h2" mb={2}>Детство и юность</Typography>
                  <Typography>{x.ageText}</Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h2" mb={2}>Личная жизнь</Typography>
                  <Typography>{x.lifeText}</Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h2" mb={2}>Музыка</Typography>
                  <Typography>{x.musicText}</Typography>
                </Box>
                <Box mt={3} mb={3}>
                  <Typography variant="h2">{x.boyNoW}</Typography>
                  <Typography>{x.boyNoWText}</Typography>
                </Box>
              </Stack>
            );
          }
          return null;
        },
      )}
    </Container>
  );
}

export default ArtistBio;
