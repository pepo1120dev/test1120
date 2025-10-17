export const summaryMetrics = [
  {
    label: 'Total asistentes',
    value: 7643,
    delta: 12.8,
    trend: 'up'
  },
  {
    label: 'Charlas, intervenciones y visitas lúdicas',
    value: 62,
    delta: 8.5,
    trend: 'up'
  },
  {
    label: 'Personas capacitadas',
    value: 1582,
    delta: 4.1,
    trend: 'up'
  },
  {
    label: 'Charlas realizadas',
    value: 32,
    delta: -2.3,
    trend: 'down'
  },
  {
    label: 'Visitantes capacitados',
    value: 544,
    delta: 6.2,
    trend: 'up'
  },
  {
    label: 'Visitas lúdicas realizadas',
    value: 21,
    delta: 1.9,
    trend: 'up'
  }
];

export const comparativeSeries = {
  title: 'Gestión vinculación comparativo',
  categories: ['ene', 'feb', 'mar', 'abr', 'may', 'jun'],
  currentYear: 2025,
  series: [
    {
      label: '2025',
      color: 'primary',
      data: [4217, 5321, 6045, 6620, 7014, 7643]
    },
    {
      label: '2024',
      color: 'secondary',
      data: [3985, 4154, 4821, 5018, 5472, 5871]
    }
  ]
};

export const territoryMetrics = [
  {
    label: 'Asistentes a mingas',
    value: 60,
    icon: '👥'
  },
  {
    label: 'Mingas organizadas',
    value: 1,
    icon: '🛠️'
  },
  {
    label: 'Asistentes a ferias',
    value: 52314,
    icon: '🎪'
  },
  {
    label: 'Ferias organizadas',
    value: 27,
    icon: '📈'
  }
];

export const dynamicFilters = {
  year: [2025, 2024, 2023, 2022],
  month: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto'
  ],
  training: ['Charla', 'Feria', 'Intervención lúdica'],
  zones: [
    'Zona Centro',
    'Zona Norte',
    'Zona Sur',
    'Zona Rural'
  ],
  themes: ['Prevención', 'Gestión comunitaria', 'Participación']
};

export const recordTemplates = [
  {
    id: 'community-event',
    name: 'Evento comunitario',
    fields: [
      { id: 'title', label: 'Título del evento', type: 'text', required: true },
      { id: 'date', label: 'Fecha', type: 'date', required: true },
      {
        id: 'zone',
        label: 'Zona',
        type: 'select',
        options: ['Zona Centro', 'Zona Norte', 'Zona Sur', 'Zona Rural']
      },
      {
        id: 'attendees',
        label: 'Asistentes',
        type: 'number',
        required: true
      }
    ]
  },
  {
    id: 'training-session',
    name: 'Sesión de capacitación',
    fields: [
      { id: 'title', label: 'Tema', type: 'text', required: true },
      { id: 'date', label: 'Fecha', type: 'date', required: true },
      {
        id: 'modality',
        label: 'Modalidad',
        type: 'select',
        options: ['Virtual', 'Presencial']
      },
      { id: 'facilitator', label: 'Facilitador', type: 'text' },
      { id: 'participants', label: 'Participantes', type: 'number', required: true }
    ]
  }
];

export const sampleRecords = [
  {
    id: 'R-001',
    template: 'Evento comunitario',
    title: 'Feria saludable - Mercado central',
    date: '2025-02-18',
    zone: 'Zona Centro',
    attendees: 180,
    status: 'Publicado'
  },
  {
    id: 'R-002',
    template: 'Sesión de capacitación',
    title: 'Prevención comunitaria',
    date: '2025-03-11',
    modality: 'Presencial',
    facilitator: 'Equipo territorial',
    participants: 42,
    status: 'Borrador'
  }
];
