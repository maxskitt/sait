import React from 'react';
import {
  AppBar, Button, Grid, Toolbar,
} from '@mui/material';
import Container from '@mui/material/Container';

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Grid container>

            <Grid item xs={2} alignItems="center"><p>Logo</p></Grid>

            <Grid xs={10} container item justifyContent="flex-end" alignItems="center">
              <nav>
                <Button sx={{ color: 'white' }} component="a" href="/">Home</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} component="a" href="/artists">Artist</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/music">Music</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/afisha">Afisha</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/news">News</Button>
              </nav>
            </Grid>

          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
