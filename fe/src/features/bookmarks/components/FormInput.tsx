interface FormInputProps {
  label: string;
  fieldValue: string;
  onChange: (e: any) => void;
}

const FormInput = ({ label, fieldValue, onChange }: FormInputProps) => {
  return (
    <div className="p-2">
      <label className="grid">
        <span>{label}</span>
        <input
          type="text"
          value={fieldValue}
          onChange={onChange}
          className="border p-2"
        />
      </label>
    </div>
  );
};

export default FormInput;
