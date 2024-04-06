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
      "Access-Control-Allow-Origin": "*", // Consenti l'accesso da qualsiasi dominio
      "Access-Control-Allow-Headers": "Content-Type", // Consenti l'header Content-Type
      "Access-Control-Allow-Methods": "OPTIONS,POST" // Consenti solo i metodi OPTIONS e POST
    },
    body: JSON.stringify({ massaCorporea })
  };

  // Restituisci la risposta
  return response;
};
