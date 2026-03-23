import { config, singleton, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud', branchPrefix: 'content/' },
  cloud: { project: 'mondzorg/mondzorg-test' },

  singletons: {
    hero: singleton({
      label: 'Hero Section',
      format: { data: 'yaml' },
      path: 'src/content/hero',
      schema: {
        badge: fields.text({ label: 'Badge Text' }),
        title: fields.text({ label: 'Title', multiline: true }),
        body: fields.text({ label: 'Body Text', multiline: true }),
        primaryCta: fields.text({ label: 'Primary CTA Label' }),
        secondaryCta: fields.text({ label: 'Secondary CTA Label' }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Value' }),
            label: fields.text({ label: 'Label' }),
          }),
          { label: 'Stats', itemLabel: (props) => props.fields.value.value }
        ),
      },
    }),
  },
});
