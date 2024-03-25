async function sha1Hash(password) {
    // Codificar a senha em UTF-8
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    // Gerar o hash SHA-1
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);

    // Converter o buffer para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

document.getElementById('validarSenhaBtn').addEventListener('click', validarSenha);
document.getElementById('verificarVazamentoBtn').addEventListener('click', verificarSenhaVazada);

async function verificarSenhaVazada() {
    let senha = document.getElementById('senha').value;
    let sha1PasswordHash = await sha1Hash(senha);
    const apiUrl = `https://api.pwnedpasswords.com/range/${sha1PasswordHash.slice(0, 5)}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API");
        }
        return response.text();
    })
    .then(data => {
        const hashes = data.split('\n');
        const passwordHash = sha1PasswordHash.slice(5).toUpperCase();
        const match = hashes.find(hash => hash.startsWith(passwordHash));
        if (match) {
            const count = parseInt(match.split(':')[1]);
            if (count > 10000) {
                document.getElementById('resultado').style.color = "red";
                document.getElementById('resultado').style.fontWeight = "10px";
                document.getElementById('resultado').innerHTML = `Atenção: <br> Esta senha foi vazada em muitos lugares (${count} vezes). Recomenda-se mudar imediatamente!`;
            } else {
                document.getElementById('resultado').style.color = "red";
                document.getElementById('resultado').innerHTML = `A senha foi vazada ${count} vezes.`;
            }
        } else {
            document.getElementById('resultado').style.color = "green";
            document.getElementById('resultado').innerHTML = "A senha não foi vazada.";
        }
    })
    .catch(error => document.getElementById('resultado').innerHTML = "Erro ao buscar dados da API: " + error);
}

function validarSenha() {
    let senha = document.getElementById('senha').value;
    let resultado = document.getElementById('resultado');
    let msg = "";
   
    if (senha.length < 8) {
       msg += "A senha deve ter no mínimo 8 caracteres.<br>";
    }
   
    if (!/[A-Z]/.test(senha)) {
       msg+= "A senha deve conter pelo menos uma letra maiúscula. <br>";
    }
   
    if (!/[a-z]/.test(senha)) {
       msg+= "A senha deve conter pelo menos uma letra minúscula.<br>";
    }
   
    if (!/[0-9]/.test(senha)) {
       msg+= "A senha deve conter pelo menos um número.<br>";
    }
    if(msg == "")
    {
        resultado.innerHTML = "A senha é válida!<br>";
        resultado.style.color = "green";
    }
    else
    {
        resultado.innerHTML = msg
        resultado.style.color = "red";
    }
}
