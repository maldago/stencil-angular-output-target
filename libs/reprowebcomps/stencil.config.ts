import {angularOutputTarget} from '@stencil/angular-output-target';
import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'reprowebcomps',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    angularOutputTarget({
      componentCorePackage: '@repro/reprowebcomps',
      directivesProxyFile: '../../../libs/ng-repro/src/directives/proxies.ts',
      directivesArrayFile: '../../../libs/ng-repro/src/directives/index.ts',
      outputType: 'scam',

    })
  ],
};
