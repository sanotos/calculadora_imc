import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    if (alturaMetros > 0 && pesoKg > 0) {
      const imc = pesoKg / (alturaMetros * alturaMetros);
      setResultado(imc.toFixed);
      setClassificacao(classificarIMC(imc));
    } else {
      setResultado(null);
      setClassificacao('');
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    if (imc >= 40) return 'Obesidade grau III';
    return '';
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bgcolor="#f0f0f0"
    >
      <Card sx={{ width: '80%', maxWidth: 400, p: 2 }}>
        <CardContent>
          {/* Título */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Calculadora IMC
          </Typography>

          {/* Entrada para Altura */}
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Altura (cm)"
            />
          </Box>

          {/* Entrada para Peso */}
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Peso (kg)"
            />
          </Box>

          {/* Botão para Calcular */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={calcularIMC}
          >
            Calcular IMC
          </Button>

          {/* Exibição do Resultado */}
          {resultado && (
            <Box mt={3}>
              <Typography variant='h6' fontWeight={900} gutterBottom>RESULTADO:</Typography>
              <Typography variant="h6">Seu IMC é: {resultado}</Typography>
              <Typography variant='h6'>Classificação: {classificacao}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
