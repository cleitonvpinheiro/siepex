// Lista de hotéis com suas informações básicas: nome, endereço, valor, telefone e e-mail
const hotels = [
    {
      idHotel: 1,
      hotelName: "Xtay Cais Rooftop",
      address: "R. Caldas Júnior, 11 - Centro Histórico, 90010-260",
      value: 153,
      phoneNumber: "11 3181-9829",
      email: ""
    },
    {
      idHotel: 2,
      hotelName: "Açores Flat Design",
      address: "R. dos Andradas, 756 - Centro Histórico, 90010-020",
      value: 156,
      phoneNumber: "51 99709-9708",
      email: ""
    },
    {
      idHotel: 3,
      hotelName: "OYO Hotel Lancaster",
      address: "Tv. Eng. Acilino de Carvalho, 67 - Centro Histórico, 90010-200",
      value: 173,
      phoneNumber: "51 3136-4178",
      email: ""
    },
    {
      idHotel: 4,
      hotelName: "Porto Alegre Eco Hostel",
      address: "R. Luiz Afonso, 276 - Cidade Baixa, 90050-310",
      value: 148,
      phoneNumber: "51 3377 8876",
      email: "reservas@poaecohostel.com.br"
    },
    {
      idHotel: 5,
      hotelName: "Letto Hotel",
      address: "R. Duque de Caxias, 1454 - Centro Histórico, 90010-281",
      value: 180,
      phoneNumber: "51 3779-0661",
      email: ""
    }
  ];
  
  // Seleciona o elemento da página onde os cards dos hotéis serão inseridos
  const hotelListElement = document.getElementById("hotel-list");
  
  // Função que cria o HTML de um card de hotel baseado em um objeto da lista
  function criaHotelCard(hotel) {
    // Cria um elemento <div> para o card
    const hotelElement = document.createElement("div");
    hotelElement.classList.add("lista-hotel"); // Adiciona classe para estilização
  
    // Formata o valor do hotel para o formato de moeda BRL
    const precoFormatado = hotel.value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    // Define o conteúdo HTML interno do card, preenchendo os dados do hotel
    hotelElement.innerHTML = `
      <h2>${hotel.hotelName}</h2>
      <p><strong>Localização:</strong> ${hotel.address}</p>
      <p><strong>Preço:</strong> ${precoFormatado}</p>
      <p><strong>Telefone:</strong> <em>${hotel.phoneNumber.trim()}</em></p>
      ${
        // Se o hotel tiver e-mail, exibe o campo com link para enviar email
        hotel.email
          ? `<p><strong>E-mail:</strong> <a href="mailto:${hotel.email.trim()}">${hotel.email.trim()}</a></p>`
          : ""
      }
    `;
  
    // Retorna o elemento completo
    return hotelElement;
  }
  
  // Percorre a lista de hotéis e cria/adiciona os cards na página
  hotels.forEach((hotel) => {
    const hotelCard = criaHotelCard(hotel); // Cria o card
    hotelListElement.appendChild(hotelCard); // Insere o card no DOM
  });
  