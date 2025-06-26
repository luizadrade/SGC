TRIO:
[ANA LUIZA ANDRADE, ANA CAROLINA AMARAL E KEVYLLY OLIVEIRA]

SGC-Cantina/
├── cantina.js
├── package.json (opcional, se usar prompt-sync)
└── README.md

O objetivo do programa é auxiliar o controle de estoque da cantina, permitindo:
- Registro de produtos e suas quantidades iniciais.
- Verificação de estoque crítico (ex: abaixo de 10 unidades).
- Registro de vendas com validação de estoque.
- Reposição de produtos.
- Menu interativo para uso contínuo.
- 
.VARIAVEIS
 Foram utilizadas variáveis let para armazenar os produtos, quantidades, opções do menu e entrada do usuário.

.ARRAYS
 Dois arrays foram utilizados:
Um para armazenar os nomes dos produtos
Outro para armazenar as quantidades correspondentes de cada produto.

.IF/ELSE
Usados para:
Validar entradas do usuário
Verificar se o estoque é suficiente para uma venda
Verificar se o produto existe
Detectar quando o estoque está abaixo do limite crítico

.Laços de Repetição (For / Do...While)
for foi usado para:
Percorrer o array de produtos e registrar as quantidades iniciais.
Exibir o estoque.
do...while foi usado para exibir o menu de forma contínua até o usuário escolher sair.

.Switch / Case
Estrutura usada para implementar o menu interativo com as opções
