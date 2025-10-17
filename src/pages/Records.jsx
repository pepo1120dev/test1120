import { useMemo, useState } from 'react';
import DynamicForm from '../components/DynamicForm.jsx';
import RecordTable from '../components/RecordTable.jsx';
import { recordTemplates, sampleRecords } from '../data/dashboard.js';
import ApplicationShell from '../layout/ApplicationShell.jsx';

const Records = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(recordTemplates[0]?.id ?? '');
  const [records, setRecords] = useState(sampleRecords);
  const [formValues, setFormValues] = useState({});

  const template = useMemo(
    () => recordTemplates.find((item) => item.id === selectedTemplate),
    [selectedTemplate]
  );

  const handleSave = () => {
    if (!template) return;

    const requiredFields = template.fields.filter((field) => field.required);
    const hasMissing = requiredFields.some((field) => !formValues[field.id]);

    if (hasMissing) {
      alert('Por favor completa los campos obligatorios antes de guardar.');
      return;
    }

    const newRecord = {
      id: `R-${(records.length + 1).toString().padStart(3, '0')}`,
      template: template.name,
      status: 'Borrador',
      ...formValues,
    };

    setRecords([newRecord, ...records]);
    setFormValues({});
  };

  return (
    <ApplicationShell title="Registros dinámicos" breadcrumb="Prevención / Formularios">
      <div className="flex flex-1 flex-col gap-6">
        <section className="rounded-3xl bg-white/85 p-6 shadow-card ring-1 ring-border">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-muted">Gestión de formularios dinámicos</h2>
              <p className="text-sm text-muted-foreground">
                Crea y administra registros de actividades comunitarias con estructuras flexibles para cada dependencia.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-muted">Plantilla</label>
              <select
                value={selectedTemplate}
                onChange={(event) => setSelectedTemplate(event.target.value)}
                className="rounded-2xl border border-border bg-white px-4 py-2 text-sm font-semibold text-muted shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {recordTemplates.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <DynamicForm templateId={selectedTemplate} values={formValues} onValuesChange={setFormValues} />

        <div className="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setFormValues({})}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            Limpiar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90"
          >
            Guardar registro
          </button>
        </div>

        <RecordTable records={records} />
      </div>

      <aside className="flex w-full flex-col gap-5 lg:max-w-sm">
        <div className="rounded-3xl bg-white/80 p-5 shadow-card ring-1 ring-border">
          <h3 className="text-base font-bold text-muted">Workflow sugerido</h3>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-muted">1. Selecciona la plantilla</span>
              <p>Elige el formulario que mejor represente la actividad a registrar.</p>
            </li>
            <li>
              <span className="font-semibold text-muted">2. Completa la información</span>
              <p>Los campos obligatorios aseguran la trazabilidad y la calidad de los datos.</p>
            </li>
            <li>
              <span className="font-semibold text-muted">3. Publica o comparte</span>
              <p>Guarda el registro y compártelo con los equipos territoriales desde el panel.</p>
            </li>
          </ol>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-secondary/15 via-white to-primary/10 p-5 shadow-soft">
          <h4 className="text-base font-bold text-muted">Integración con analítica</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Los registros creados se reflejan automáticamente en los paneles de indicadores para facilitar el seguimiento.
          </p>
        </div>
      </aside>
    </ApplicationShell>
  );
};

export default Records;
