import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-e2e-request-mock',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};
