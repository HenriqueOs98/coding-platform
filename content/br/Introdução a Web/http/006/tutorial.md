

**🎯 Desvendando os Cabeçalhos HTTP: Seu Guia para Respostas Eficientes**

Todo desenvolvedor web precisa conhecer os cabeçalhos HTTP que controlam como navegadores e servidores se comunicam. Vamos explorar os principais cabeçalhos de resposta que você usa no dia a dia:

### `Age` ⏳
`Age: 15`

Indica há quantos segundos o recurso está armazenado num cache intermediário. Como um timer que mostra quanto tempo o conteúdo ficou guardado antes de ser reenviado.

### `Cache-Control` 🚦
`Cache-Control: max-age=1800`  
`Cache-Control: no-cache, no-store, max-age=0`

O controlador de cache mais poderoso:
- `max-age=1800` = cache válido por 30 minutos
- `no-cache` = sempre validar com o servidor
- `no-store` = proíbe totalmente armazenar qualquer versão

Exemplo radical:
```http
Cache-Control: no-store
```

### `Content-Disposition` 💾
`Content-Disposition: attachment; filename="relatorio.pdf"`

Força o download ao invés de abrir no navegador. Útil para PDFs e arquivos binários. Use aspas se o nome tiver espaços ou acentos.

### `Content-Encoding` 📦
`Content-Encoding: gzip`

Indica que o conteúdo está compactado (como um ZIP na web). Reduz o tamanho de transferência significativamente.

### `Content-Length` 📏
`Content-Length: 2048`

Mostra o tamanho exato do corpo da resposta em bytes. Importante para progresso de downloads.

### `Content-Type` 🏷️
`Content-Type: application/json; charset=utf-8`

Define o formato dos dados e codificação de caracteres. O clássico `text/html` para páginas web.

### `ETag` 🔑
`ETag: "abc123def456"`

Uma "impressão digital" da versão do recurso. Se mudar, o cache é invalidado. Funciona como validação inteligente.

### `Expires` ⏰
`Expires: Fri, 30 Jun 2023 18:00:00 GMT`

Data de validade do conteúdo. Após esse prazo, o cache deve ser atualizado. Usado em conjunto com `Cache-Control`.

### `Location` 📍
`Location: /novo-login`

Usado em redirecionamentos (status 3xx) ou para indicar URL de novos recursos criados (status 201 Created).

### `Set-Cookie` 🍪
`Set-Cookie: SessaoID=ABC123; Secure; HttpOnly; SameSite=Lax`

Configura cookies no navegador. Opções modernas:
- `Secure` = só envia por HTTPS
- `HttpOnly` = bloqueia acesso via JavaScript
- `SameSite` = previne ataques CSRF

## Headers de Segurança Importantes 🔒

### `Content-Security-Policy` 🛡️
`Content-Security-Policy: default-src 'self'`

Política de segurança contra XSS que define fontes permitidas para scripts, imagens e outros recursos. [DOCS]

---

Dominar esses cabeçalhos transforma sua forma de controlar cache, segurança e comportamento do navegador. Que tal testar alguns no seu próximo projeto? 🚀