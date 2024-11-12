document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
  
    // Fetch transactions
    fetch('/api/transactions', {
      headers: {
        'x-auth-token': token,
      },
    })
      .then(response => response.json())
      .then(data => {
        const transactionsList = document.getElementById('transactionsList');
        data.forEach(transaction => {
          const li = document.createElement('li');
          li.textContent = `${transaction.category} - ${transaction.amount}`;
          transactionsList.appendChild(li);
        });
      });
  
    // Fetch predictions
    fetch('/api/predictions', {
      headers: {
        'x-auth-token': token,
      },
    })
      .then(response => response.json())
      .then(data => {
        const predictionsDiv = document.getElementById('predictions');
        predictionsDiv.textContent = JSON.stringify(data, null, 2);
      });
  });
  