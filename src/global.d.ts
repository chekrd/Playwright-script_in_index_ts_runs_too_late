type Mutable<T> = { -readonly [P in keyof T]: T[P] };

type ClientConfig = {
  readonly debugEnabled: boolean;
}

declare module 'playwright-script_in_index_ts_runs_too_late' {
  global {
    interface Window {
      readonly _clientConfig: ClientConfig;
    }
  }
}
