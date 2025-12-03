import { combineReducers, type Reducer, type StateFromReducersMapObject, type UnknownAction } from 'redux';

import { accountSettingsReducer, accountSettingsStateKey } from './accountSettings';
import { featureToggleReducer, featureToggleStateKey } from './featureToggle';
import { forecastReducer, forecastStateKey } from './forecasts';
import { providersReducer, providersStateKey } from './providers';
import { reportReducer, reportStateKey } from './reports';
import { resourceReducer, resourceStateKey } from './resources';
import { rosReducer, rosStateKey } from './ros';
import { uiReducer, uiStateKey } from './ui';
import { userAccessReducer, userAccessStateKey } from './userAccess';

const reducersMap = {
  [accountSettingsStateKey]: accountSettingsReducer,
  [featureToggleStateKey]: featureToggleReducer,
  [forecastStateKey]: forecastReducer,
  [providersStateKey]: providersReducer,
  [reportStateKey]: reportReducer,
  [resourceStateKey]: resourceReducer,
  [rosStateKey]: rosReducer,
  [uiStateKey]: uiReducer,
  [userAccessStateKey]: userAccessReducer,
};

const rootReducerInternal = combineReducers(reducersMap);
export type RootState = StateFromReducersMapObject<typeof reducersMap>;
export const rootReducer: Reducer<RootState, UnknownAction> = rootReducerInternal;
