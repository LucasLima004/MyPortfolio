declare const Email: any;

const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  const userEmail = 'seu_email@example.com';
  const smtpServer = 'smtp.your-email-provider.com';
  const smtpUser = 'seu_email@example.com';
  const smtpPassword = 'sua_senha_smtp';

  const emailDetails = {
    Host: smtpServer,
    Username: smtpUser,
    Password: smtpPassword,
    To: 'seu_email_destino@example.com',
    From: email,
    Subject: subject,
    Body: `Nome: ${name}<br>E-mail: ${email}<br>Mensagem: ${message}`,
  };

  try {
    const response = await Email.send(emailDetails);
    console.log('E-mail enviado com sucesso!', response);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
  }
};

export default sendEmail;
