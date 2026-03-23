'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MultiStepFormModal } from './MultiStepFormModal';

interface FormModalContextType {
  openForm: (preSelectedType?: string) => void;
  closeForm: () => void;
  isOpen: boolean;
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export const useFormModal = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
};

export const FormModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedType, setPreSelectedType] = useState<string | undefined>();

  const openForm = (type?: string) => {
    setPreSelectedType(type);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <FormModalContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <MultiStepFormModal
        isOpen={isOpen}
        onClose={closeForm}
        preSelectedType={preSelectedType}
      />
    </FormModalContext.Provider>
  );
};
