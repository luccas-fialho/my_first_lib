# Markdown Links

Desenvolvido por [Luccas Fialho](https://github.com/luccas-fialho)

## Resumo

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Com esta lib é possivel:
- Analisar arquivo com extensão .md;
- Verificar se há links no arquivo markdown;
- Não encontrando, emitir mensagem avisando que não há links;
- Caso encontre links, analisar se os links funcionam;
- Retornar lista com os links identificados;
- Retornar com o status http de cada link encontrado;


## Instalação

### NPM

No terminal, executar o comando:

`npm i lf-markdown`

Após a instalação, execute a lib com o comando `npx lf-markdown <path-to-file>`

* Exemplo: `npx lf-markdown ./files/text-for-test.md`

Para avaliar cada link e receber a lista com os links e os status http, executar o comando:
`npx lf-markdown <path-to-file> validate`

* Exemplo: `npx lf-markdown ./files/text-for-test.md validate`

***  O caminho do arquivo pode ser relativo ao diretório de onde você está executando a lib, ou absoluto.

Link no [NPM](https://www.npmjs.com/package/lf-markdown)

## Tecnologias utilizadas

<div align="inline_block">
  <a href="https://github.com/luccas-fialho">
</div>
  
<div style="display: inline_block"><br>

  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img title="Javascript" align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img title="Git" align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img title="VScode" align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img title="Github" align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  <img title="Jest" align="center" alt="Jest" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jest/jest-plain.svg" />
  
</div><br>