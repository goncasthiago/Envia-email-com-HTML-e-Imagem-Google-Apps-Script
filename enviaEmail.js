function mandaEmail() {
	//Links das imagens

	var grLogoUrl = 'https://i.ibb.co/L5mVGGM/Logo-GRUPO-GR-RGB.png';

	var grLoboBlob = UrlFetchApp.fetch(grLogoUrl).getBlob().setName('grLoboBlob');
	//Aqui vai o HTML
	var html = `

  <div>
    <img src='cid:grLogo'width=50px><br>
    <div>
        <h1>Titulo do E-mail</h1>
        <h2> Outras informações </h2>
        <p>Um outro paragrafo</p>
    </div>
 </div>
  `;

	MailApp.sendEmail({
		to: 'thiago.goncalves@grupogr.com.br',
		subject: 'Logos',

		htmlBody: html,

		inlineImages: {
			grLogo: grLoboBlob
		}
	});
}
