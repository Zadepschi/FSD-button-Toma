export function getStyles(base, mode = {}, additional = []) {
  return [
    base,
    ...additional.filter(Boolean),
    ...Object.keys(mode).filter((key) => Boolean(mode[key])),
  ].join(' ');
}

