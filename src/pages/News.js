import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'mui-image';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase';

function News() {

  const [news, setNews] = useState([]);

  const getCollection = async () => {
    const temp = [];
    const querySnapshot = await getDocs(collection(db, 'news'));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setNews(temp);
  };
  useEffect(() => {
    getCollection().then();
  }, []);

  return (
    <Container>
      <Typography variant="h2" mt={5}>Новости</Typography>
      {news.map((item, key) => (
        <Grid container key={key} mb={3} spacing={3}>
          <Typography variant="h4" mt={5}>
            {item.title}
          </Typography>
          <Grid item xs={3}>
            <Image src={item.image}/>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">
              {item.text}
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-end" mt={3}>
            <Grid item xs={3}>
              <Typography variant="body1" sx={{
                textAlign: 'end',
                fontWeight: 'bold'
              }}>
                {Date(item.data)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default News;
