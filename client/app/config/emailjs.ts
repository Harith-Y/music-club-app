// EmailJS Configuration

// Validate required environment variables
const validateEmailJSConfig = () => {
  const requiredVars = [
    'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 
    'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing EmailJS environment variables:', missingVars);
    console.warn('Please set these in your .env.local file');
  }
};

// Validate on import
validateEmailJSConfig();

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  TO_EMAIL: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'musicclub.iiitdm@gmail.com',
} as const;

// Template variables that will be sent to EmailJS
export interface EmailJSTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}
