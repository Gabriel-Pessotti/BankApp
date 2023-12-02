export const formatCurrency = (value) => {
    const numericValue = value?.toString().replace(/[^0-9.]/g, ''); // Remover caracteres não numéricos, exceto o ponto
    if (numericValue !== '') {
      const floatValue = parseFloat(numericValue);
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(floatValue);
    }
    return '';
  };