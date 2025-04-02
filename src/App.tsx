import { Box, Card, Typography } from '@mui/material';

export default function App() {

  return (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          width={'100vw'}
          height={'100vh'}
        >
          <Card
          sx={{
            display: 'flex',
            direction: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            marginTop: '144px',
            marginX: '16px'
          }}
          >

            {/* titulo */}
            <Box
              marginY={'16px'}
            >
              <Typography variant='h5' fontWeight={700}>
              calculadora imc
              </Typography>
            </Box>

            {/* entrada */ }
            <Box>
              <Typography variant='h5'>
                altura
              </Typography>
            </Box>

            {/* saida */}
            <Box>
              resultado
            </Box>
          </Card>
        </Box>
  )
}