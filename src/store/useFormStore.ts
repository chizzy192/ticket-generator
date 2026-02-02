import { create } from 'zustand';

type FormData = {
  id: string;
  fullName: string;
  email: string;
  githubUsername: string;
  avatar: File | null;
};

type FormStore = FormData & {
  emailError: string;
  fullNameError: string;
  imageError: string;
  updateField: (field: keyof FormData, value: any) => void;
  setEmailError: (error: string) => void;
  setFullNameError: (error: string) => void;
  setImageError: (error: string) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  id: '',
  fullName: '',
  email: '',
  githubUsername: '',
  avatar: null,
  emailError: '',
  fullNameError: '',
  imageError: '',
  updateField: (field: keyof FormData, value: any) => 
    set(() => ({
      [field]: value
    })),
  setEmailError: (error: string) => set({ emailError: error }),
  setFullNameError: (error: string) => set({ fullNameError: error }),
  setImageError: (error: string) => set({ imageError: error }),
}));