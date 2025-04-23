const inbox = [
    {
      messageId: 1,
      asunto: "Oferta especial",
      preview: "Aprovechá este descuento exclusivo por tiempo limitado..."
    },
    {
      messageId: 2,
      asunto: "Reunión programada",
      preview: "Recordatorio: tenés una reunión mañana a las 10 AM."
    },
    {
      messageId: 3,
      asunto: "Novedades en tu cuenta",
      preview: "Actualizamos nuestras políticas de privacidad. Más detalles..."
    }
  ];
  
  const count = inbox.length;
  
  // El ternario que debés agregar debe devolver
  // "mensaje" si count es == 1
  // y "mensajes" si mayor
  
  const message = count === 0 ? "No tenés mensajes" : `Tenés ${count} ${count > 1 ? "Mensajes" : "Mensaje"} en tu casilla`; 


//   const message =
//   count < 1
//     ? "No hay mensajes"
//     : count == 1
//     ? `Tenes ${count} mensaje`
//     : `Tenes ${count} mensajes`;
  
  console.log(message);