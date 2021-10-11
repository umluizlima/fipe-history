const FormSelect = ({
  id,
  label,
  onChange,
  options,
  placeholder,
  value,
}) => (
  <div>
    <label
      className="block text-sm font-medium text-gray-700"
      htmlFor={id}
    >
      {label}
    </label>
    <select
      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
      disabled={!options.length}
      id={id}
      name={id}
      onChange={onChange}
      value={value}
    >
      {placeholder && (<option key={null} value={''} disabled hidden>{placeholder}</option>)}
      {options.map((option) => (<option key={option.value} value={option.value}>{option.text}</option>))}
    </select>
  </div>
);

export default FormSelect;
