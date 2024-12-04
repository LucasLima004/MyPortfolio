import React, { useState } from 'react';
import { Input, TextArea, Button } from './style';
import sendEmail from '../../../service/EmailService';
import { Messages } from '../../../utils/Messages';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      await sendEmail(name, email, subject, message);
      setSuccessMessage(Messages.emailSendSucess);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setErrorMessage(Messages.emailSendFail);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder={Messages.formName}
        value={name}
        onChange={handleNameChange}
        required
      />

      <Input
        type="email"
        id="email"
        name="email"
        placeholder={Messages.formEmail}
        value={email}
        onChange={handleEmailChange}
        required
      />

      <Input
        type="text"
        id="subject"
        name="subject"
        placeholder={Messages.formSubject}
        value={subject}
        onChange={handleSubjectChange}
        required
      />

      <TextArea
        id="text-area"
        name="text-area"
        placeholder={Messages.formMessage}
        value={message}
        onChange={handleMessageChange}
        required
      />
      
      <Button type="submit" disabled={loading}>
        {loading ? Messages.sending : Messages.send}
      </Button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
};

export default ContactForm;
