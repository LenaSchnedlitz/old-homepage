type HexColor =
  | '#bbb'
  | '#dc389a'
  | '#ee3377'
  | '#f05869'
  | '#f37e5b'
  | '#f6a34d'
  | '#f9c940'
  | '#e0dd52'
  | '#72e675'
  | '#47d8df'
  | '#33bbee'
  | '#5199e0'
  | '#894adf';

type Hsl = [number, number, number];
const toColorString: (hsl: Hsl) => string = ([h, s, l]) =>
  `hsl(${h.toFixed(2)}, ${s.toFixed(2)}%, ${l.toFixed(2)}%)`;

type Modification =
  | 'darkest'
  | 'dark'
  | 'medium'
  | 'light'
  | 'lightest'
  | 'accent'
  | 'accent2'
  | 'gradientColor';
type ModFunc = (hsl: Hsl) => Hsl;
const modify: (modFunc: Modification, hsl: Hsl) => Hsl = (modFunc, hsl) =>
  eval(`${modFunc}([${hsl}])`);
const darkest: ModFunc = ([h, s]) => [h - 38, s + 2, 5];
const dark: ModFunc = ([h, s]) => [h - 15, s + 1, 11];
const medium: ModFunc = ([h, s]) => [h, s, 82];
const light: ModFunc = ([h, s]) => [h + 15, s + 2, 91];
const lightest: ModFunc = ([h, s]) => [h + 38, s + 2, 96];
const accent: ModFunc = ([h, s, l]) => [h + 52, s + 8, l + 6];
const accent2: ModFunc = ([h, s, l]) => [h + 66, s + 8, l + 6];
const gradientColor: ModFunc = ([h, s, l]) => [h + 38, s, l + 10];

const HSL_VALUES: Record<HexColor, Hsl> = {
  // hard coded to avoid calculations
  '#dc389a': [324.15, 70.09, 54.12],
  '#ee3377': [338.18, 84.62, 56.67],
  '#f05869': [353.29, 83.52, 64.31],
  '#f37e5b': [13.82, 86.36, 65.49],
  '#f6a34d': [30.53, 90.37, 63.33],
  '#f9c940': [44.43, 93.91, 61.37],
  '#e0dd52': [58.73, 69.61, 60],
  '#72e675': [121.55, 69.88, 67.45],
  '#47d8df': [182.76, 70.37, 57.65],
  '#33bbee': [196.36, 84.62, 56.67],
  '#5199e0': [209.79, 69.76, 59.8],
  '#894adf': [265.37, 69.95, 58.24],
  '#bbb': [0, 0, 73.33],
};

export const backgroundGradient = (color) => {
  return `conic-gradient(at bottom left, ${color}, ${toColorString(
    gradientColor(HSL_VALUES[color]),
  )})`;
};

export const illustrationVariables = (color) => {
  const hsl = HSL_VALUES[color];
  console.warn();
  const variants: Modification[] = [
    'darkest',
    'dark',
    'medium',
    'light',
    'lightest',
    'accent',
    'accent2',
  ];

  return variants
    .map(
      (variant) =>
        `--illustration--${variant}: ${toColorString(modify(variant, hsl))}`,
    )
    .join(';');
};
