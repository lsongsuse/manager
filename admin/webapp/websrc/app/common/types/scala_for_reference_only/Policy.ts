// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface Policy {
  rules: Array;
}

export function isPolicy(v: any): v is Policy {
  return (
    (v['rules'] && isArray(v['rules']))
  );
}