import { useMemo } from 'react';
import { recordTemplates } from '../data/dashboard.js';

const FieldRenderer = ({ field, value, onChange }) => {
  const common = {
    id: field.id,
    name: field.id,
    required: field.required,
    value: value ?? '',
    onChange: (event) => onChange(field.id, event.target.value),
    className:
      'w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-muted shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
  };

  if (field.type === 'select') {
    return (
      <select {...common}>
        <option value="">Selecciona una opción</option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return <input type={field.type} placeholder={field.placeholder} {...common} />;
};

const DynamicForm = ({ templateId, values, onValuesChange }) => {
  const template = useMemo(
    () => recordTemplates.find((item) => item.id === templateId),
    [templateId]
  );

  if (!template) {
    return (
      <div className="rounded-3xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        Selecciona un tipo de formulario para comenzar a registrar información.
      </div>
    );
  }

  const handleChange = (fieldId, fieldValue) => {
    onValuesChange({ ...values, [fieldId]: fieldValue });
  };

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {template.fields.map((field) => (
        <label key={field.id} className="flex flex-col gap-2 text-sm font-semibold text-muted">
          {field.label}
          <FieldRenderer field={field} value={values[field.id]} onChange={handleChange} />
        </label>
      ))}
    </form>
  );
};

export default DynamicForm;
