import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LoadingScreen } from '../../LoadingScreen';
import { darkNavbarTheme } from '../../theme';
import { VizPageDataProvider } from './VizPageDataContext';
import { ForkingProvider } from './ForkingContext';
import { URLStateProvider } from './URLStateContext';
import { VizRunnerProvider } from './VizRunnerContext';
import { VizProvider } from './VizContext';
import { RealtimeModulesProvider } from './RealtimeModulesContext';
import { SplitPaneResizeProvider } from './SplitPaneResizeContext';
import { Body } from './Body';

export const VizPage = () => (
  <URLStateProvider>
    <VizPageDataProvider fallback={<LoadingScreen />}>
      <RealtimeModulesProvider>
        <VizProvider>
          <ForkingProvider fallback={<LoadingScreen message="Forking..." />}>
            <ThemeProvider theme={darkNavbarTheme}>
              <VizRunnerProvider>
                <SplitPaneResizeProvider>
                  <Body />
                </SplitPaneResizeProvider>
              </VizRunnerProvider>
            </ThemeProvider>
          </ForkingProvider>
        </VizProvider>
      </RealtimeModulesProvider>
    </VizPageDataProvider>
  </URLStateProvider>
);
