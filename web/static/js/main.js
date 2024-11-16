function updateGitHubUsername() {
  const apiUrl = 'https://api.github.com/user/128084939';
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      const username = data.login;
      const element = document.querySelector('.titular');
      if (element) {
        element.textContent = username + " (" + data.name + ")";
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

window.onload = function() {
  updateGitHubUsername();
};
