// Seleciona o elemento HTML com id "hotel-list", onde os hotéis serão adicionados
const listahotel = document.getElementById("hotel-list");

// Função que cria um elemento HTML para um hotel recebido como parâmetro
function criaHotels(hotel) {
  
  // Cria uma div que representará o hotel
  const hotelPT = document.createElement("div");
  
  // Adiciona a classe CSS "hotel" a essa div para estilização
  hotelPT.classList.add("hotel");
  
  // Define o conteúdo HTML interno da div com os dados do hotel
  hotelPT.innerHTML = `
    <div class="lista-hotel">
      <h2>${hotel.hotelName}</h2>
      <p><strong>Localização:</strong> ${hotel.address}</p>
      <p><strong>Preço:</strong> R$ ${hotel.value}</p>
      <p><strong>Número:</strong> <em>${hotel.phoneNumber}</em></p>
    </div>
  `;
  
  // Retorna o elemento div criado para ser inserido na página
  return hotelPT;
}

// Para cada hotel no array 'hotels' (assumindo que existe um array chamado hotels)
hotels.forEach(hotel => {
  // Cria o elemento HTML do hotel usando a função criada
  const elementos = criaHotels(hotel);
  
  // Adiciona o elemento criado como filho do container "hotel-list"
  listahotel.appendChild(elementos);
});
