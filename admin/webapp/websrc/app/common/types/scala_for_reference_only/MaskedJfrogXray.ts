// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface MaskedJfrogXray {
  url: string;
  enable: boolean;
  username: string;
}

export function isMaskedJfrogXray(v: any): v is MaskedJfrogXray {
  return (
    ((typeof v['url']) === 'string') &&
    ((typeof v['enable']) === 'boolean') &&
    ((typeof v['username']) === 'string')
  );
}