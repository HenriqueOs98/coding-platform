

**🚀 Transformando Layouts com Tailwind: Um Guia Prático**

Vamos colocar a mão na massa! Nosso desafio é transformar este HTML simples:

```html
<html>
	<body>
		<div>
			<h1>Adquira este super produto</h1>
			<p>Aprovado pelas maiores empresas</p>
			<ul>
				<li>Globo</li>
				<li>iFood</li>
				<li>Nubank</li>
			</ul>
			<button>Saiba mais</button>
		</div>
	</body>
</html>
```

Em um layout profissional igual ao exemplo [DOCS] - mas usando Tailwind CSS!

### 🔌 Configurando o Ambiente

No CodePen:
1. Crie um novo Pen
2. Clique no ícone ⚙️ do painel HTML
3. Na seção "Configurações do <head>", cole:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
4. Salve e feche

Pronto! Seu ambiente está ready para Tailwind. Teste com:
```html
<p class="text-red-500 font-bold">Funcionou! 🎉</p>
```

### ✨ Estilizando Passo a Passo

**1. Container Principal**
```html
<div class="max-w-2xl mx-auto mt-8 p-6 bg-slate-50 rounded-xl shadow-lg">
```

- `max-w-2xl`: Largura máxima equivalente
- `mx-auto`: Centralização horizontal
- `mt-8`: Margem superior
- `p-6`: Espaçamento interno
- `bg-slate-50`: Fundo cinza claro
- `rounded-xl`: Bordas arredondadas
- `shadow-lg`: Sombra destacada

**2. Título Principal**
```html
<h1 class="text-3xl font-bold text-blue-800 mb-4">
```

**3. Subtítulo**
```html
<p class="text-lg text-gray-600 mb-6">
```

**4. Lista de Empresas**
```html
<ul class="space-y-2 mb-8">
  <li class="flex items-center">
    <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
    Globo
  </li>
  <!-- Repetir para outros itens -->
</ul>
```

**5. Botão de Ação**
```html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
```

### 🔗 Recursos Úteis
- [Modelo inicial no CodePen][DOCS]
- [Projeto finalizado][DOCS]

Dica: Compare com a versão CSS pura e veja como o Tailwind simplifica o processo! 💡

```html
<!-- Versão completa -->
<div class="max-w-2xl mx-auto mt-8 p-6 bg-slate-50 rounded-xl shadow-lg">
  <h1 class="text-3xl font-bold text-blue-800 mb-4">Adquira este super produto</h1>
  <p class="text-lg text-gray-600 mb-6">Aprovado pelas maiores empresas</p>
  <ul class="space-y-2 mb-8">
    <li class="flex items-center">
      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      Globo
    </li>
    <li class="flex items-center">
      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      iFood
    </li>
    <li class="flex items-center">
      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      Nubank
    </li>
  </ul>
  <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
    Saiba mais
  </button>
</div>
```