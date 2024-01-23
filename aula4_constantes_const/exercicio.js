const nome = 'Renan Victor Rodrigues dos';
const sobrenome = 'Santos';
const idade = 25;
const peso = 74;
const altura = 1.72;
let imc; //formula peso / (altura*altura)
let anoNascimento;

imc = (peso /(altura*altura) );
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de ', imc,',', nome, sobrenome, 'Nasceu em ', anoNascimento);