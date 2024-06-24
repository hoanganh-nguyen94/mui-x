import * as React from 'react';
import { expect } from 'chai';
import { createRenderer, screen, waitFor } from '@mui/internal-test-utils';

import { sharedLicenseStatuses } from '@mui/x-license/useLicenseVerifier/useLicenseVerifier';
import { ResponsiveChartContainerPro } from './ResponsiveChartContainerPro';

describe('<ResponsiveChartContainerPro /> - License', () => {
  const { render } = createRenderer();

  beforeEach(() => {
    Object.keys(sharedLicenseStatuses).forEach((key) => {
      delete sharedLicenseStatuses[key];
    });
  });

});
