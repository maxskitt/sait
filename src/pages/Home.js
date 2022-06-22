import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: 'center' }} mt={5}>L Music</Typography>
      <Stack spacing={2}>
        <Typography variant="subtitle1">
          «L Music» - российский музыкальный лейбл, основанный в середине 2016 года.
          Направление деятельности - менеджмент артистов, продюсирование, организация
          гастрольной деятельности, полный музыкальный продакшн, цифровая дистрибуция.
          Полный спектр услуг для музыкантов, продюсеров и диджеев.
        </Typography>
        <Typography variant="subtitle1">
          Мы сотрудничаем и представляем интересы многих артистов на эксклюзивной и
          партнерской основе. В нашем ростере известные
          диджеи, музыканты, продюсеры и творческие коллективы.
        </Typography>
        <Typography variant="subtitle1">
          За плечами нашей команды многолетний опыт работы.
          Мы всегда в курсе последних музыкальных тенденций и
          ориентируемся в первую очередь на интересы и пожелания клиентов.
          Сотрудничая с нами, Вы можете быть полностью уверены в том,
          что Ваши даже самые высокие ожидания будут оправданы в полной мере!
        </Typography>
      </Stack>
    </Container>
  );
}

export default Home;
