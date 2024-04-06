exports.handler = async (event, context) => {
  // Estrai i valori di peso e altezza dall'oggetto event.body
  const { peso, altezza } = JSON.parse(event.body);

  // Calcola la massa corporea
  const altezzaInMetri = altezza / 100; // Converti l'altezza da cm a metri
  const massaCorporea = peso / (altezzaInMetri * altezzaInMetri);

  // Costruisci la risposta da restituire
  const response = {
    statusCode: 200,
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    },
    body: JSON.stringify({ massaCorporea })
  };

  // Restituisci la risposta
  return response;
};
