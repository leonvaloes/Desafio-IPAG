function buscarRepositorios() {
   let usuario = document.getElementById('usuarioGitHub').value;
   let listaRepositorios = document.getElementById('listaRepositorios');
   listaRepositorios.innerHTML = '';

   fetch(`https://api.github.com/users/${usuario}/repos`)
   .then(response => response.json())
   .then(repos => {
      repos.forEach(repo => {
         let divRepo = document.createElement('div');
         divRepo.innerHTML = `
            <h2>${repo.name}</h2>
            <p>Descrição: ${repo.description || 'Sem descrição'}</p>
            <p>Linguagem: ${repo.language || 'Não especificada'}</p>
            <p>Estrelas: ${repo.stargazers_count}</p>
            <button onclick="copiarURL('${repo.ssh_url}')">Copiar SSH</button>
            <button onclick="copiarURL('${repo.clone_url}')">Copiar HTTPS</button>
         `;
         listaRepositorios.appendChild(divRepo);
         divRepo.addEventListener('click', function(event) {
            if (event.target.tagName !== 'BUTTON') {
               window.location.href = repo.html_url;
            }
         });
      });
   })
   .catch(error => {
      console.error('Erro ao buscar repositórios:', error);
      listaRepositorios.innerHTML = '<p>Erro ao buscar repositórios. Por favor, verifique o nome do usuário.</p>';
   });
}

function copiarURL(url) {
   let tempInput = document.createElement('input');
   tempInput.value = url;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand('copy');
   document.body.removeChild(tempInput);
   alert(`URL copiada: ${url}`);
}