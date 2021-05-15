import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './styles.scss';

export const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [message, setMessage] = useState('');

  const { t } = useTranslation();
  const T_ROOT = 'contact';

  const handleInput = (e: any) => {
    const copyFormData: any = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/akash/google_sheets/sfMHXggoJYiqThpH?tabId=Contact',
        {
          method: 'post',
          body: JSON.stringify([[formData.email, formData.message]]),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
      setMessage(json.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error');
    }
  };

  return (
    <section className="Contact" id="contact">
      <h1>
        <Trans i18nKey={t(`${T_ROOT}.title`)} components={{ Span: <span /> }} />
      </h1>
      <div className="container">
        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <FaLocationArrow size={44} color="#eeb211" />
              <address>
                Avenida castillo de chapultepec, Cuernavaca Morelos.
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <FaWhatsapp size={44} color="#eeb211" />
              <p>
                <a href="tel:+155895548855"> + 55- 80 97 57 55</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <AiOutlineMail size={44} color="#eeb211" />
              <p>
                <a href="mailto:info@example.com">
                  contacto@apixcloudservice.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col center-items">
            <form
              className="input-form"
              id="contact"
              name="contact"
              onSubmit={sendData}
            >
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Dejanos tu comentario, te contactaremos en breve
                </label>
                <textarea
                  name="message"
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
              <input
                name="submit"
                type="submit"
                value="Enviar"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
