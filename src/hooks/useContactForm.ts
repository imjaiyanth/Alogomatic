import { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  interest: string;
  details: string;
  budget?: string;
}

interface UseContactFormReturn {
  formData: FormData;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  interest: '',
  details: '',
  budget: ''
};

const SALES_EMAIL = 'sales@meghamsys.com';
const FORM_ENDPOINT = (import.meta.env['VITE_CONTACT_FORM_ENDPOINT'] as string | undefined) ?? '';

const encodeMailtoBody = (data: FormData) => {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Interest: ${data.interest}`,
    data.budget ? `Budget: ${data.budget}` : null,
    '',
    data.details || 'Project details pending'
  ].filter(Boolean);

  return encodeURIComponent(lines.join('\n'));
};

export default function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent('New inquiry via meghamsys.com');
      const body = encodeMailtoBody(formData);
      window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormData(initialFormData);

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setError(null);
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm
  };
}
