!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ana clara</title>
  <script src="estudo.js"></script>
  
</head>
<body>

  Capital: <input id="valor" type="text"><br>
  Juros(mensais): <input id="juros" type="text"><br>
  <button onclick="calcula()">Enviar</button>

  <br><br><br><br>
  Valor 1: <input id="v1" type="text"><br>
  <button onclick="operacao('+')">Somar</button>
  <button onclick="operacao('-')">Subtrair</button>
  <button onclick="operacao('*')">Multiplicar</button>
  <button onclick="operacao('/')">Dividir</button>
  <br>
  Valor 2: <input id="v2" type="text">
  <button onclick="calcule('+')">Calcule</button><br><br>
  <span id="resultado">0,00</span>



</body>
</html>

