import { useState } from "react";

export const useFormField = (
  initialState: Record<string, string>,
  validators: Record<string, (value: string) => void>
) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>(
    Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );

  const handleInputChange = (field: string, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    try {
      validators[field](value);
      setErrors((prev) => ({ ...prev, [field]: "" }));
    } catch (error: any) {
      setErrors((prev) => ({ ...prev, [field]: error.message }));
    }
  };

  return {
    values,
    errors,
    handleInputChange,
  };
};
