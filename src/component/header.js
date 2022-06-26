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

            <Grid item xs={2} alignItems="center"><p>The Kugut project</p></Grid>

            <Grid xs={10} container item justifyContent="flex-end" alignItems="center">
              <nav>
                <Button sx={{ color: 'white' }} component="a" href="/">Домашняя страница</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} component="a" href="/artists">ОБ УЧАСТНИКАХ</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/music">Медиа</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/afisha">Афиша</Button>
              </nav>
              <nav>
                <Button sx={{ color: 'white' }} href="/news">Новости</Button>
              </nav>
            </Grid>

          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
