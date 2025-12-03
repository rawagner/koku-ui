import type { RosReport, RosType } from '@koku-ui/api/ros/ros';
import type { RosPathsType } from '@koku-ui/api/ros/ros';
import { runRosReport } from '@koku-ui/api/ros/rosUtils';
import type { AxiosError } from 'axios';
import { createAction } from 'typesafe-actions';

import type { ThunkAction } from '../../store/common';
import { FetchStatus } from '../../store/common';
import type { RootState } from '../../store/rootReducer';
import { getFetchId } from './rosCommon';
import { selectRos, selectRosError, selectRosFetchStatus } from './rosSelectors';

const expirationMS = 30 * 60 * 1000; // 30 minutes

interface RosActionMeta {
  fetchId: string;
}

export const fetchRosRequest = createAction('ros/request')<RosActionMeta>();
export const fetchRosSuccess = createAction('ros/success')<RosReport, RosActionMeta>();
export const fetchRosFailure = createAction('ros/failure')<AxiosError, RosActionMeta>();

export function fetchRosReport(rosPathsType: RosPathsType, rosType: RosType, rosQueryString: string): ThunkAction {
  return (dispatch, getState) => {
    if (!isRosExpired(getState(), rosPathsType, rosType, rosQueryString)) {
      return;
    }

    const meta: RosActionMeta = {
      fetchId: getFetchId(rosPathsType, rosType, rosQueryString),
    };

    dispatch(fetchRosRequest(meta));
    runRosReport(rosPathsType, rosType, rosQueryString)
      .then(res => {
        dispatch(fetchRosSuccess(res.data, meta));
      })
      .catch(err => {
        dispatch(fetchRosFailure(err, meta));
      });
  };
}

function isRosExpired(state: RootState, rosPathsType: RosPathsType, rosType: RosType, rosQueryString: string) {
  const ros = selectRos(state, rosPathsType, rosType, rosQueryString);
  const fetchError = selectRosError(state, rosPathsType, rosType, rosQueryString);
  const fetchStatus = selectRosFetchStatus(state, rosPathsType, rosType, rosQueryString);
  if (fetchError || fetchStatus === FetchStatus.inProgress) {
    return false;
  }

  if (!ros) {
    return true;
  }

  const now = Date.now();
  return now > ros.timeRequested + expirationMS;
}
