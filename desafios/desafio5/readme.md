# Validador de Senha

Este é um projeto de validação de senha que permite aos usuários verificar se sua senha atende aos critérios de segurança e também verifica se a senha foi vazada em violações de dados conhecidas.

## Funcionalidades

- Permite ao usuário inserir uma senha e validar se ela atende aos critérios de segurança:
  - Deve ter no mínimo 8 caracteres.
  - Deve conter pelo menos uma letra maiúscula.
  - Deve conter pelo menos uma letra minúscula.
  - Deve conter pelo menos um número.

- Verifica se a senha foi vazada em violações de dados conhecidas através da API do [Have I Been Pwned](https://haveibeenpwned.com/):
  - Se a senha foi vazada em mais de 10.000 lugares, recomenda-se mudá-la imediatamente.
  - Se a senha foi vazada menos de 10.000 vezes, o usuário é informado sobre o número de vezes que a senha foi vazada.
  - Se a senha não foi encontrada em vazamentos, o usuário recebe uma mensagem indicando que a senha não foi vazada.

## Instruções de Uso

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador da web.
3. Insira uma senha no campo de entrada.
4. Clique no botão "Validar Senha" para verificar se a senha atende aos critérios de segurança.
5. Clique no botão "Verificar se a senha foi vazada" para verificar se a senha foi comprometida em violações de dados conhecidas.

## Exemplo de Uso

```plaintext
Suponha que você insira a senha "Senha123":
- A senha é válida!
- A senha foi vazada 837 vezes.

Neste caso, a senha é considerada válida, mas foi comprometida em 837 violações de dados conhecidas.
```

