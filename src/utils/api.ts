import emailjs from '@emailjs/browser';

emailjs.init('2oS8lBCg8rhhiZcWx');

interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export const sendContactForm = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      'service_orwow1r',
      'template_vesv4bk',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Ej vald',
        message: formData.message,
        reply_to: formData.email
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Error sending form:', error);
    throw error;
  }
};

export const sendQuoteForm = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      'service_orwow1r',
      'template_l9w9268',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Ej vald',
        message: formData.message,
        reply_to: formData.email
      }
    );
    return { success: true, response };
  } catch (error) {
    throw error;
  }
};