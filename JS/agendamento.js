// Função para aplicar a máscara no campo CPF
document.getElementById('event-cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d{3})?(\d{3})?(\d{2})?/, function(match, p1, p2, p3, p4) {
        return `${p1}.${p2 ? p2 + '.' : ''}${p3 ? p3 + '-' : ''}${p4 || ''}`;
      });
    }
    e.target.value = value;
  });
