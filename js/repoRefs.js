class gitAPI {
  constructor(name, token) {
    this.name = name;
    this.token = token;
  }

  async getRepos() {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };

    const reposRaw = await fetch(
      'https://api.github.com/users/Vakaliuk/repos',
      {
        method: 'GET',
        headers: headers,
      }
    );
    const repos = await reposRaw.json();

    repos.forEach((item) => {
      const reposRef = document.querySelector('.repos');

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
  }
}
