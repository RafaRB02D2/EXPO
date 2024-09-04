document.getElementById('fetchButton').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://api.coincap.io/v2/assets')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>Crypto Moeda:</strong> ${data.id}</p>
                <p><strong>Cotação de Real para Dolar:</strong> ${data.data.priceUSD}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});