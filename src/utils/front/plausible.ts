declare global {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Window {
    plausible: (
      eventName: string,
      props?: { props: { [key: string]: string } }
    ) => void
  }
}

export const logEvent = (
  eventName: string,
  props?: { [key: string]: string }
): void => {
  if (!window.plausible) return

  window.plausible(eventName, props ? { props } : props)
}