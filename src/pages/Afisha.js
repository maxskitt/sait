import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';
import { Box, Grid } from '@mui/material';
import Image from 'mui-image';

function Afisha() {

  const [afisha, setAfisha] = useState([]);

  const getCollection = async () => {
    const temp = [];
    const querySnapshot = await getDocs(collection(db, 'afisha'));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setAfisha(temp);
  };
  useEffect(() => {
    getCollection()
      .then();
  }, []);

  return (
    <Container>
      <Typography variant="h2" mt={5}>Афиша</Typography>

      {afisha.map((item, key) => (
        <Grid container key={key} spacing={2} mb={2}>
          <Grid item xs={6}>
            <Image src={item.img} height={200}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography>{item.text}</Typography>
          </Grid>
        </Grid>
      ))}

      <Box mb={5}/>

    </Container>
  );
}

export default Afisha;
