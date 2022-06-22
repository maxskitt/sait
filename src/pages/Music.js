import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';
import Player from '../component/player';

function Music() {
  const [artist, setAtrist] = useState([]);
  const [play, setPlay] = useState(false);

  const getCollection = async () => {
    const temp = [];
    const querySnapshot = await getDocs(collection(db, 'artist'));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setAtrist(temp);
  };
  useEffect(() => {
    getCollection().then();
  }, []);



  return (
    <Container>
      <Typography variant="h2" mt={5}>
        Эксклюзивная музыка
      </Typography>
      <Grid container spacing={3} mt={2} mb={3} justifyContent="center">
        {artist.map((item, key) => (
          <Grid container item xs={5} key={key}>
            <Grid item xs={4}>
              <Avatar
                alt="Remy Sharp"
                src={item.img}
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5">{item.name}</Typography>
              <Player />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Music;
