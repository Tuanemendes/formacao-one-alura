<p align="center"> <img src="https://imgur.com/mIBmcEL.png" alt="Javascript: validando formulários"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Formulário de criação de contas para o banco virtual MoniBank.</p>

## Tecnologias utilizadas durante o curso
* JavaScript

## Tecnologias utilizadas no projeto
* HTML
* CSS


validação do cpf 

A fórmula do cálculo dos últimos dígitos verificadores de um CPF é dividida em:

Primeiro dígito
Para descobrir o primeiro dígito você precisará recolher os 9 primeiros dígitos do CPF e multiplicar por números de 10 a 2, sequencialmente.

Valor do CPF	4	5	1	0	5	5	0	4	0
Sequência	10	9	8	7	6	5	4	3	2
Resultado	40	45	8	0	30	25	0	12	0

Depois, precisamos somar todos os valores gerados nas multiplicações entre eles. Nesse caso, a soma resultou em 160. Em seguida, será necessário multiplicar essa soma por 10, que gerou o número 1600. Por fim, devemos considerar o módulo da divisão desse número com 11: 5.

Antes de decidirmos que esse é o primeiro dígito verificador, precisamos testar uma condição: Se o resultado for 10 ou 11, precisaremos zera-lo. Como não é o caso, podemos confirmar que 5 realmente é o primeiro dígito verificador do CPF base.

Segundo dígito
Para descobrir o segundo dígito você precisará recolher os 10 primeiros dígitos do CPF e multiplicar por números de 11 a 2, sequencialmente.

Valor do CPF	4	5	1	0	5	5	0	4	0	5
Sequência	11	10	9	8	7	6	5	4	3	2
Resultado	44	50	9	0	35	30	0	16	0	10

Em seguida, será necessário somar todos os valores resultados pela multiplicação novamente, e essa soma resultou em 194. Depois, multiplicamos essa soma por 10, para encontrar o valor 1940. Ao final, chegamos na etapa de encontrar o módulo da divisão por 11: o número 4.

Novamente, precisamos verificar para caso o resultado for 10 ou 11, será necessário zera-lo. Como novamente não foi o caso, o número 4 realmente é o segundo dígito verificador do CPF base.



console.log(campo.validity)  que exibe possíveis erros de validação que ocorrem automaticamente quando interagimos com esse formulário. Neste caso todos os elementos estão retornando false, menos o valueMissing