import React from 'react';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: '#1976d2',
      }}
    >
      <Container>
        <Grid container justifyContent="flex-start">
          <Grid container spacing={5} item xs={9}>
            <Grid item>
              <a href="https://vk.com">
                <Image width={35} height={35} src="/images/social/vk.png"/>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/">
                <Image width={35} height={35} src="/images/social/instagram.png"/>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/">
                <Image width={35} height={35} src="/images/social/youtube.png"/>
              </a>
            </Grid>
          </Grid>
          <Grid item xs={3} justifyContent="flex-end" alignItems="center">
            <Typography color="white" mt={1}>
              Copyright © Your Website 2022.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
