import rollupConfig from 'build-config/rollup/rollup.config';

export default {
  ...rollupConfig,
  external: [
    ...rollupConfig.external,
    'button'
  ],
};
