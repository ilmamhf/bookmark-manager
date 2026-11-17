interface FormInputProps {
  label: string;
  fieldValue: string;
  onChange: (e: any) => void;
  isLong?: boolean;
}

const FormInput = ({ label, fieldValue, onChange, isLong }: FormInputProps) => {
  return (
    <div className="p-2">
      <label className="grid">
        <span>{label}</span>
        {!isLong ? (
          <input
            type="text"
            value={fieldValue}
            onChange={onChange}
            className="border p-2"
          />
        ) : (
          <textarea
            value={fieldValue}
            onChange={onChange}
            className="border p-2"
          />
        )}
      </label>
    </div>
  );
};

export default FormInput;
