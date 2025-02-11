

**🌐 Criando uma Landing Page do Zero com CSS Puro**

Vamos construir juntos uma página inicial moderna usando apenas HTML e CSS! Este projeto é especial porque depois vamos refazer tudo com Tailwind e Astro, mostrando como essas ferramentas podem agilizar nosso trabalho.

**O que é uma Landing Page?**  
É aquela página que você acessa primeiro em um site, como a vitrine de uma loja. Ela precisa ser clara, atraente e responsiva (funcionar bem em celulares e computadores).

### 🛠 Nosso Plano de Ação:
1. **Cabeçalho** com logo e menu
2. **Seção Hero** (destaque principal)
3. **Lista de Recursos** em grid
4. **Rodapé** com informações de contato
5. Página de **Preços**
6. Página do **Blog**

Vamos começar!

---

**📂 Estrutura Básica do Projeto**

Crie uma pasta `projeto-landing` com:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechSolution</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Bem-vindo à TechSolution!</h1>
</body>
</html>
```

```css
/* estilos.css */
body {
    background: #f0f2f5;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px;
}
```

---

**🖥 Criando o Cabeçalho**

Vamos adicionar um menu de navegação profissional:

```html
<header>
    <nav>
        <a href="/" class="logo">TechSolution</a>
        <div class="menu">
            <a href="#planos">Planos</a>
            <a href="#blog">Blog</a>
            <a href="#login" class="destaque">Entrar</a>
            <a href="#cadastro" class="botao">Cadastrar</a>
        </div>
    </nav>
</header>
```

Estilizando com CSS:

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.menu a {
    color: #4a5568;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s;
}

.menu a:hover {
    color: #2d3748;
}

.botao {
    background: #48bb78;
    color: white!important;
    padding: 0.5rem 1rem;
    border-radius: 5px;
}
```

[DOCS]

---

**🌟 Seção Hero**

A parte mais importante da página:

```html
<section class="hero">
    <h2>Sua Solução em Tecnologia</h2>
    <p>Mais de 500 empresas confiam em nossa plataforma</p>
    <div class="marcas">
        <span>Microsoft</span>
        <span>Amazon</span>
        <span>Google</span>
    </div>
    <button class="cta">Saiba Mais</button>
</section>
```

Estilos correspondentes:

```css
.hero {
    text-align: center;
    padding: 4rem 0;
}

.hero h2 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
}

.marcas {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    color: #718096;
}
```

[DOCS]

---

**📱 Tornando Responsivo**

Use media queries para adaptar a telas menores:

```css
@media (max-width: 768px) {
    .menu {
        display: none; /* Esconde o menu em mobile */
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .marcas {
        flex-direction: column;
    }
}
```

---

**💡 Dica Profissional:**  
Sempre comece pelo mobile! É mais fácil adaptar elementos simples para telas grandes do que o contrário.

---

**🎯 Desafio Extra:**  
Tente criar a seção de planos com um grid de 3 colunas usando CSS Grid. Use cores diferentes para destacar o plano premium!

```css
.planos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
}

.plano {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

Pronto! Você já tem a base de uma landing page profissional. Na próxima etapa, vamos refinar os detalhes e adicionar interações! 🚀