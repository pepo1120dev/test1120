const RecordTable = ({ records }) => (
  <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-5 py-3 font-semibold uppercase tracking-wide text-muted-foreground">Código</th>
          <th className="px-5 py-3 font-semibold uppercase tracking-wide text-muted-foreground">Título</th>
          <th className="px-5 py-3 font-semibold uppercase tracking-wide text-muted-foreground">Fecha</th>
          <th className="px-5 py-3 font-semibold uppercase tracking-wide text-muted-foreground">Estado</th>
          <th className="px-5 py-3"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border/70">
        {records.map((record) => (
          <tr key={record.id} className="transition hover:bg-slate-50/70">
            <td className="px-5 py-4 font-semibold text-muted">{record.id}</td>
            <td className="px-5 py-4 text-muted-foreground">
              <div className="flex flex-col">
                <span className="font-semibold text-muted">{record.title}</span>
                <span className="text-xs text-muted-foreground/70">{record.template}</span>
              </div>
            </td>
            <td className="px-5 py-4 text-muted-foreground">{record.date}</td>
            <td className="px-5 py-4">
              <span className="badge-pill bg-primary/10 text-xs font-bold uppercase tracking-wide text-primary">
                {record.status}
              </span>
            </td>
            <td className="px-5 py-4">
              <button className="text-sm font-semibold text-secondary hover:text-secondary/80">Ver detalle</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecordTable;
