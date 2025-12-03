import type { RosPathsType, RosType } from '@koku-ui/api/ros/ros';
export const rosStateKey = 'ros';

export function getFetchId(rosPathsType: RosPathsType, rosType: RosType, rosQueryString: string) {
  return `${rosPathsType}--${rosType}--${rosQueryString}`;
}
