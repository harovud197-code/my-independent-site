export const MOQ_FRAMEWORK = {
  standard: {
    label: 'Selected standard styles',
    quantity: 'From 50 pairs',
    description: 'Applies when an available construction is selected and the production setup stays simple.',
  },
  logoProgram: {
    label: 'Custom logo / studio grip programs',
    quantity: 'Typically from 100 pairs',
    description: 'The normal planning point for custom logos, studio grip artwork and branded programs.',
  },
  bespoke: {
    label: 'Fully bespoke construction / packaging',
    quantity: 'Higher MOQ',
    description: 'Confirmed after reviewing construction, yarns, sizes, colorways, grip layout and packaging specifications.',
  },
} as const;

export const MOQ_COPY = {
  standardShort: 'From 50 pairs — selected standard styles',
  logoProgramShort: 'Typically from 100 pairs — custom logo / studio grip programs',
  bespokeShort: 'Higher MOQ — depending on specification',
  frameworkSummary: 'Selected standard styles can start from 50 pairs. Custom logo and studio grip programs typically start from 100 pairs. Fully bespoke construction or packaging requires a higher MOQ depending on the specification.',
  yogaCurrent: 'Current Yoga & Pilates custom logo or studio grip projects typically start from 100 pairs. Fully bespoke construction, multiple size runs or custom packaging may require a higher MOQ depending on the specification.',
  yogaHistorical: 'Historical / project-specific trial quantity, or selected standard routes. Current Yoga & Pilates custom projects typically start from 100 pairs depending on specification.',
} as const;
