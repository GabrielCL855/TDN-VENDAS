 const prices = [
    { normal: 205000, parceria: 164000, g:20, m:20, d:12000, c:20 },  
    { normal: 150000, parceria: 120000, g:15, m:9, d:9000, c:15 }, 
    { normal: 190000, parceria: 152000, g:20, m:20, d:12000, c:20 }, 
    { normal: 215000, parceria: 172000, g:9, m:17, d:10000, c:17 }, 
    { normal: 198000, parceria: 158000, g:10, m:16, d:8000, c:17 }, 
    { normal: 190000, parceria: 152000, g:8, m:15, d:9000, c:15 } 
  ];

  function showTab(index) {
    document.querySelectorAll('.tab-button').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.calculator').forEach((div, i) => {
      div.classList.toggle('active', i === index);
    });
  }

  function calcTotal(index) {
  const qtd = parseInt(document.getElementById(`qtd${index}`).value) || 0;
  const parc = document.getElementById(`parc${index}`).checked;
  const p = prices[index];
  const valor = parc ? p.parceria : p.normal;
  const total = valor * qtd;
  const vendedor = total * 0.20;
  const painel = total * 0.80;

  document.getElementById(`total${index}`).textContent = total.toLocaleString('pt-BR');
  document.getElementById(`g${index}`).textContent = p.g * qtd;
  document.getElementById(`m${index}`).textContent = p.m * qtd;
  document.getElementById(`d${index}`).textContent = (p.d * qtd).toLocaleString('pt-BR');
  document.getElementById(`c${index}`).textContent = p.c * qtd;
  document.getElementById(`vendedor${index}`).textContent = vendedor.toLocaleString('pt-BR');
  document.getElementById(`painel${index}`).textContent = painel.toLocaleString('pt-BR');
}


  document.addEventListener('DOMContentLoaded', () => {
    prices.forEach((_, index) => calcTotal(index));
  });