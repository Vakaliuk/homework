const reposRef = document.querySelector('.repos');

function fetchRepo() {
  fetch('https://api.github.com/users/Vakaliuk/repos')
    .then((Response) => Response.json())
    .then((json) => {
      json.forEach((item) => {
        const repo = document.createElement('li');
        repo.innerHTML = `<a href="${item.html_url}"> ${item.full_name} </a>`;
        repo.classList.add('repo-item');

        const repoDesc = document.createElement('p');
        repoDesc.textContent = `- ${item.description}`;
        repoDesc.classList.add('repo-description');

        reposRef.appendChild(repo);
        if (repoDesc.textContent !== '- null') {
          repo.appendChild(repoDesc);
        }
      });
    });
}

fetchRepo();
