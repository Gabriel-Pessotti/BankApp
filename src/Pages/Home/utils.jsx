export const formatCurrency = (value) => {
    const numericValue = value?.toString().replace(/[^0-9.]/g, '');
    if (numericValue !== '') {
      const floatValue = parseFloat(numericValue);
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(floatValue);
    }
    return '';
  };