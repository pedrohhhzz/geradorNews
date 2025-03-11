# Gerador de Noticias Recentes
- O aplicativo é um gerador de noticias, em React Java script utilizando a api News API para buscar artigos de noticias sobre diferentes temas.
- O usuário pode pesquisar manualmente por notícias ou navegar por categorias como Esportes, Entretenimento e Política.
 ![Image](https://github.com/user-attachments/assets/d3bb34a0-f850-41e7-8f60-1f8865dee158)



### Setup de Ambiente

- [Node](https://nodejs.org/pt) `npm install`
- [Lucide](https://lucide.dev/) `npm install lucide-react`
- [React/Vite](https://pt.vite.dev/guide/) 
- [News API](https://newsapi.org/)

### Como Roda Na Minha maquina?
- Apenas rode `npm run dev`
### Estrutura do Projeto
- `./Newapp` é o componente que permite ao usuário buscar e visualizar notícias em tempo real
- `./Card` é componente que visualiza as noticias geradas pelo usuário
  
# Como foi feito?
### API News
- A News Api é uma api de pesquisa de artigos.
  ![Image](https://github.com/user-attachments/assets/85a3e981-3093-47c3-b5e5-334ba174c2e4)
Chamada para api, a função assincrona recebe como parametro query que a pesquisa, fetch é arequisição https para a api externa
o endpoint é `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`

### menu responsivo
- Usando tailwindcss para estilizar o botão do menu
![Image](https://github.com/user-attachments/assets/7b69bc9a-02d3-46e4-82b9-80b52ec5402d)

![image](https://github.com/user-attachments/assets/d5b508a3-52d5-4743-852e-8538ef119171)

![image](https://github.com/user-attachments/assets/125dde59-577e-44a9-84dc-73aeca12a74e)

## Componente card
- o componente card foi utilizado para exibir as notícias
  
![image](https://github.com/user-attachments/assets/5c6603fa-0213-4a02-8c09-8026bce5cb41)

![image](https://github.com/user-attachments/assets/1d2a22d1-2425-4f7d-bb86-efc21bfb73f6)

- foi utilizada a função slice para diminuir a quantidade de caracteres da descrição e titulo.



  

