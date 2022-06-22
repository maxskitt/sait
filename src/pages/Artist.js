import React, { useEffect, useState }  from 'react';
import Image from 'mui-image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { truncate } from 'lodash';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';

function Artist() {

  const [artist, setArtist] = useState([]);

  const getCollection = async () => {
    const temp = [];
    const querySnapshot = await getDocs(collection(db, 'artist'));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setArtist(temp);
  };
  useEffect(() => {
    getCollection().then();
  }, []);

  console.log(artist, "artist")

  return (
    <Container>

      <Typography variant="h2" mt={5}>Эксклюзивные артисты</Typography>
      <Grid container spacing={5} mt={3} mb={3}>
        {artist.map((item, key) => (
          <Grid key={key} container spacing={2} item xs={4}>
            <Grid item xs={4}>
              <Image
                src={item.img}
                style={{ borderRadius: '10px' }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="body1" mb={2}>
                {truncate(item.text, {
                  length: 180,
                  separator: ' ',
                })}

              </Typography>
              <Button
                variant="contained"
                component="a"
                href={item.url}
              >
                Узнать подробнее
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Artist;
