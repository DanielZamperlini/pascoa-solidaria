function gerarPDF() {
  // Acesso ao jsPDF
  const { jsPDF } = window.jspdf;

  // Obter dados do formulário
  const nomeResponsavel = document.getElementById('nomeResponsavel').value;
  const idade = document.getElementById('idade').value;
  const phone = document.getElementById('phone').value;
  const endereco = document.getElementById('endereco').value;
  const quantidadeCriancas =
    document.getElementById('quantidadeCriancas').value;
  const nomeCrianca1 = document.getElementById('nomeCrianca1').value;
  const sexoCrianca1 = document.getElementById('sexoCrianca1').value;
  const idadeCrianca1 = document.getElementById('idadeCrianca1').value;
  const nomeCrianca2 = document.getElementById('nomeCrianca2').value;
  const sexoCrianca2 = document.getElementById('sexoCrianca2').value;
  const idadeCrianca2 = document.getElementById('idadeCrianca2').value;
  const nomeCrianca3 = document.getElementById('nomeCrianca3').value;
  const sexoCrianca3 = document.getElementById('sexoCrianca3').value;
  const idadeCrianca3 = document.getElementById('idadeCrianca3').value;
  const nomeCrianca4 = document.getElementById('nomeCrianca4').value;
  const sexoCrianca4 = document.getElementById('sexoCrianca4').value;
  const idadeCrianca4 = document.getElementById('idadeCrianca4').value;
  const nomeCrianca5 = document.getElementById('nomeCrianca5').value;
  const sexoCrianca5 = document.getElementById('sexoCrianca5').value;
  const idadeCrianca5 = document.getElementById('idadeCrianca5').value;

  // Criar instância jsPDF
  const pdf = new jsPDF();

  // Definir tamanho da fonte
  pdf.setFontSize(15);

  // Adicionar logo ou imagem ao PDF
  const logoImg = new Image();
  logoImg.src = 'img/pascoalogo.png'; // Certifique-se de que o caminho está correto
  pdf.addImage(logoImg, 'PNG', 10, 15, 60, 40);

  const presentImg = new Image();
  presentImg.src = 'img/ovosdapascoa.png';
  pdf.addImage(presentImg, 'PNG', 135, 10, 60, 40);

  const UniasselvitImg = new Image();
  UniasselvitImg.src = 'img/uniasselvi.png';
  pdf.addImage(UniasselvitImg, 'PNG', 85, 20, 30, 20);
  pdf.addImage(UniasselvitImg, 'PNG', 85, 255, 30, 20);

  const felizpascoaImg = new Image();
  felizpascoaImg.src = 'img/felizpascoa.png';
  pdf.addImage(felizpascoaImg, 'PNG', 5, 240, 60, 60);

  // Adicionar retângulos no layout
  pdf.rect(5, 62, 200, 20); // Retângulo para "Responsável"
  pdf.rect(5, 82, 200, 10);
  pdf.rect(5, 92, 200, 10);
  pdf.rect(5, 102, 200, 10);
  pdf.rect(5, 112, 200, 10);

  pdf.rect(5, 132, 200, 20); // Retângulo para "Criança"
  pdf.rect(5, 152, 200, 10);
  pdf.rect(5, 162, 200, 10);
  pdf.rect(5, 172, 200, 10);
  pdf.rect(5, 182, 200, 10);
  pdf.rect(5, 192, 200, 10);
  pdf.rect(5, 202, 200, 10);

  // Adicionar conteúdo ao PDF
  pdf.text(`Folha de Cadastro`, 80, 60);
  pdf.text(`Informações sobre O responsável :`, 6, 70);
  pdf.text(`Nome do Responsável : ${nomeResponsavel}`, 6, 90);
  pdf.text(`Idade : ${idade}`, 6, 100);
  pdf.text(`Telefone : ${phone}`, 6, 110);
  pdf.text(`Endereço: ${endereco}`, 6, 120);

  pdf.text(`Informações sobre as crianças`, 6, 140);
  pdf.text(
    `Quantidade de crianças na residência: ${quantidadeCriancas}`,
    6,
    160,
  );

  pdf.text(`Nome da criança: ${nomeCrianca1}`, 6, 170);
  pdf.text(`Sexo: ${sexoCrianca1}`, 116, 170);
  pdf.text(`Idade: ${idadeCrianca1}`, 166, 170);

  pdf.text(`Nome da criança: ${nomeCrianca2}`, 6, 180);
  pdf.text(`Sexo: ${sexoCrianca2}`, 116, 180);
  pdf.text(`Idade: ${idadeCrianca2}`, 166, 180);

  pdf.text(`Nome da criança: ${nomeCrianca3}`, 6, 190);
  pdf.text(`Sexo: ${sexoCrianca3}`, 116, 190);
  pdf.text(`Idade: ${idadeCrianca3}`, 166, 190);

  pdf.text(`Nome da criança: ${nomeCrianca4}`, 6, 200);
  pdf.text(`Sexo: ${sexoCrianca4}`, 116, 200);
  pdf.text(`Idade: ${idadeCrianca4}`, 166, 200);

  pdf.text(`Nome da criança: ${nomeCrianca5}`, 6, 210);
  pdf.text(`Sexo: ${sexoCrianca5}`, 116, 210);
  pdf.text(`Idade: ${idadeCrianca5}`, 166, 210);

  // Salvar o PDF
  pdf.save('CadastroPascoaSolidaria.pdf');
}
