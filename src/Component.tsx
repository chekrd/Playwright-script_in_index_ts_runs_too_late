/**
 * This could be for example Redux store init. It's common to init the store with extra middleware for debugging.
 * This line of code runs before the script from /playwright/index.ts, so it fails on _clientConfig to be undefined.
 */
const store = self._clientConfig.debugEnabled
    ? () => ({
      /** todo add debug middleware... */
      value: 'value',
    })
    : () => ({
      value: 'value',
    });

export const Component = () => {
  return (
    <>
      <div>{store().value}</div>
    </>
  );
}
