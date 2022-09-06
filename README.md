<h2>Detalhes do que foi feito:</h2>

<p>- Ln 6 & 7 : Estamos utilizando useState (Ln 1), para criar um "state" no class Function, o primeiro é onde está guardado o que foi escrito no "useState", e o segundo valor, é usado para alterar o que está dentro do "useState" </p>
<p>Exemplo: const [teste, setTeste] = useState(''), aqui o setTeste é usado para fazer qualquer futura alteração nesse "state", e o teste é usado pra ser chamado em algum local do documento.</p>

<p>- Ln 11 & 14 : const criada pra pegar o valor do input, junto com ela, criar um id, estamos dando uma "identificação" ao input, que vou tentar explicar para o que será usado daqui a pouco XD.</p>

<p>- Ln 16 & 19 : Esse if foi criado com o intuito do input não criar uma tarefa ao apertar "Enter" ou no Botão diretamente, MAS, ao apertar o espaço, ele cria a tarefa o que seria outros 300 pra arrumar XD, o setList está fazendo o "spread" do que foi digitado no input e criando uma nova lista, o "setInput('')", só está aqui para quando digitarmos algo no input, ele fique vazio, sem necessidade de apagar o que continha antes no mesmo.</p>

<p>- Ln 22 & 26 : Essa função foi criada com o intuito de apagar um item da lista, o filter é utilizado para filtrar o "id" que foi criado na Ln 13, ele está verificando se o Id é diferente, e o setList na Ln 25 retorna a lista atualizada com exceção do ITEM que você deletou.</p>

<p>- Ln 28 & 30 : const criada pra apagar todas às listas, setando uma lista vazia no "setList".</p>

<p>- Ln 37 : form criado para utilizar o "Enter" ao digitar no "Input" o "preventDefault" previne o comportamento padrão do form de enviar para o Back-End e atualizar a página, perdendo o conteúdo da lista.</p>