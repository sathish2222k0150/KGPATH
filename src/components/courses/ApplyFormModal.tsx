// components/ApplyFormModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import ApplyForm from './ApplyForm';

interface ApplyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyFormModal: React.FC<ApplyFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white dark:bg-gray-900 max-w-3xl w-full mx-4 sm:mx-6 p-6 rounded-xl shadow-xl overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black dark:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <ApplyForm />
      </div>
    </div>
  );
};

export default ApplyFormModal;
