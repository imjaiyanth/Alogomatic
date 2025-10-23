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

    try {
      // Option 1: Use Formspree, Web3Forms, or similar service
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormData(initialFormData);

      // Reset success message after 5 seconds
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
