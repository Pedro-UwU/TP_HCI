// https://ethereal.email/
module.exports = {
    service: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        user: 'berta.reichert80@ethereal.email',
        password: 'aqKRv7xVWG5amC9qqD'
    },
    registerVerification: {
        from: 'Fitnice <noreply@fitnice.com>',
        subject: 'Confirmación de e-mail en Fitnice',
        htmlBodyTemplate:
            `<div>
			<head>
		    	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
				<style>
					body {
						background-color: #192633;
					}
					a {
						display: inline-block;
						font-family: "Roboto";
						font-size: 22px;
					}
					h1 {
						font-family: "Roboto";
					}
					p {
						font-family: "Roboto";
						font-size: 15px;
					}			</style>
				</head>
			<body>
				<h1 style="text-align: center; color: white">
				    <strong>
				    	¡ Bienvenido a
				    	<span style="color: #45688C">Fitnice</span>
				    	!
				    </strong>
				</h1>
				<p style="text-align: center; color: white">
				    <span>Sólo estás a un paso de empezar a entrenar con nosotros, debes confirmar tu e-mail</span>
				</p>
				<div style="text-align: center">
				    <a href="<%CONFIRM_LINK%>" style="color: #BDC3C7">Click aquí para confirmar e-mail</a>
				<div>
				<p style="text-align: center; color: white">
				    <span>Link válido por 24 horas</span>
				</p>
			</body>
			</div>`,
        confirmationLink: 'http://localhost:8080/#/verification?email=<%EMAIL%>&code=<%CODE%>',
        codeExpirationInterval: 24 * 60 * 60 * 1000
    }
}
