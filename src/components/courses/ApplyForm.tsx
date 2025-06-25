// src/components/ApplyForm.tsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  contact: string;
  whatsapp: string;
  gender: string;
  education: string;
  course: string;
  message: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
  };
  theme: {
    color: string;
  };
}

const coursePrices: Record<string, number> = {
  'Full Stack Development': 500,
  'AI & ML': 1000,
  'Cloud Architect': 1500,
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup.string().min(10).required('Contact number is required'),
  whatsapp: yup.string().min(10).required('WhatsApp number is required'),
  gender: yup.string().required('Gender is required'),
  education: yup.string().required('Education is required'),
  course: yup.string().required('Please select a course'),
  message: yup.string().required('Message is required'),
});

const loadRazorpayScript = (): Promise<boolean> =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const ApplyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [isPaying, setIsPaying] = useState(false);

  const selectedCourse = watch('course');
  const courseFee = coursePrices[selectedCourse];

  const onSubmit = async (data: FormData) => {
    try {
      // Submit form data
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Server error');
      toast.success('Form submitted & email sent!');

      // Create Razorpay order
      const orderRes = await fetch('http://localhost:5000/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course: data.course }),
      });

      const order = await orderRes.json();
      setTimeout(() => handlePayment(data.name, order), 1000);

      reset();
    } catch (err) {
      console.error('Form submission error:', err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handlePayment = async (
    name: string,
    order: { id: string; amount: number; currency: string; key: string }
  ) => {
    setIsPaying(true);
    const loadingToastId = toast.loading('Processing payment, please wait...');

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      toast.update(loadingToastId, {
        render: 'Razorpay SDK failed to load.',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
      setIsPaying(false);
      return;
    }

    const options: RazorpayOptions = {
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: 'KGPATH',
      description: 'Course Registration Fee',
      image: '/logo.png',
      handler: (response: RazorpayResponse) => {
        toast.update(loadingToastId, {
          render: `🎉 Payment Successful! Payment ID: ${response.razorpay_payment_id}`,
          type: 'success',
          isLoading: false,
          autoClose: 4000,
        });
      },
      prefill: { name },
      theme: { color: '#f97316' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    toast.dismiss(loadingToastId);
    setIsPaying(false);
  };

  return (
    <div className="relative max-w-2xl mx-auto p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl text-[17px] ">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-500">Apply Now</h2>
    
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" {...register('name')} className="input-style" placeholder="Full Name" />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input type="email" {...register('email')} className="input-style" placeholder="Email Address" />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input type="tel" {...register('contact')} className="input-style" placeholder="Contact Number" />
            <p className="text-red-500 text-sm">{errors.contact?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">WhatsApp Number</label>
            <input type="tel" {...register('whatsapp')} className="input-style" placeholder="WhatsApp Number" />
            <p className="text-red-500 text-sm">{errors.whatsapp?.message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select {...register('gender')} className="input-style">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
          </div>
          <div>
            <label className="block mb-1 font-medium">Educational Qualification</label>
            <input type="text" {...register('education')} className="input-style" placeholder="Educational Qualification" />
            <p className="text-red-500 text-sm">{errors.education?.message}</p>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Course</label>
          <select {...register('course')} className="input-style">
            <option value="">Select Course</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Cloud Architect">Cloud Architect</option>
          </select>
          <p className="text-red-500 text-sm">{errors.course?.message}</p>
          {courseFee && <p className="text-sm text-gray-600 mt-1">Course Fee: ₹{courseFee}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea rows={5} {...register('message')} className="input-style" placeholder="Your Message" />
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white text-lg font-semibold py-3 px-6 rounded-lg ${
            isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Payment Loading Overlay */}
      {isPaying && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center text-white text-lg font-semibold z-10">
          Please wait... Processing payment
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ApplyForm;
