const getCurrentDate = () => {
  const data = new Date();
  
  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const dia = data.getDate().toString().padStart(2, '0');
  
  const dataFormatada = ano + '-' + mes + '-' + dia;
  
  return dataFormatada;
};



module.exports = {
    getCurrentDate
}

