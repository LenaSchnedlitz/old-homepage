<style>
  svg {
    width: 100%;
    height: 100%;
    stroke: var(--gray-9);
  }

  path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 4;
  }

  .thin {
    stroke-width: 0.47;
  }

  .medium {
    stroke-width: 0.63;
  }

  .thick {
    stroke-width: 0.9;
  }

  @media (min-width: 700px) {
    .thin {
      stroke-width: 0.26;
    }

    .medium {
      stroke-width: 0.42;
    }

    .thick {
      stroke-width: 0.69;
    }
  }

  .vivus-0 {
    stroke-dasharray: 197 199;
    stroke-dashoffset: 198;
    animation: vivus-draw 211ms ease-out 0ms forwards;
  }

  .vivus-1 {
    stroke-dasharray: 359 361;
    stroke-dashoffset: 360;
    animation: vivus-draw 385ms ease-out 211ms forwards;
  }

  .vivus-2 {
    stroke-dasharray: 79 81;
    stroke-dashoffset: 80;
    animation: vivus-draw 85ms ease-out 596ms forwards;
  }

  .vivus-3 {
    stroke-dasharray: 47 49;
    stroke-dashoffset: 48;
    animation: vivus-draw 51ms ease-out 682ms forwards;
  }

  .vivus-4 {
    stroke-dasharray: 31 33;
    stroke-dashoffset: 32;
    animation: vivus-draw 34ms ease-out 733ms forwards;
  }

  .vivus-5 {
    stroke-dasharray: 89 91;
    stroke-dashoffset: 90;
    animation: vivus-draw 96ms ease-out 767ms forwards;
  }

  .vivus-6 {
    stroke-dasharray: 163 165;
    stroke-dashoffset: 164;
    animation: vivus-draw 175ms ease-out 864ms forwards;
  }

  .vivus-7 {
    stroke-dasharray: 77 79;
    stroke-dashoffset: 78;
    animation: vivus-draw 83ms ease-out 1039ms forwards;
  }

  .vivus-8 {
    stroke-dasharray: 253 255;
    stroke-dashoffset: 254;
    animation: vivus-draw 271ms ease-out 1122ms forwards;
  }

  .vivus-9 {
    stroke-dasharray: 172 174;
    stroke-dashoffset: 173;
    animation: vivus-draw 185ms ease-out 1394ms forwards;
  }

  .vivus-10 {
    stroke-dasharray: 119 121;
    stroke-dashoffset: 120;
    animation: vivus-draw 128ms ease-out 1579ms forwards;
  }

  .vivus-11 {
    stroke-dasharray: 111 113;
    stroke-dashoffset: 112;
    animation: vivus-draw 119ms ease-out 1708ms forwards;
  }

  .vivus-12 {
    stroke-dasharray: 68 70;
    stroke-dashoffset: 69;
    animation: vivus-draw 73ms ease-out 1827ms forwards;
  }

  .vivus-13 {
    stroke-dasharray: 50 52;
    stroke-dashoffset: 51;
    animation: vivus-draw 54ms ease-out 1901ms forwards;
  }

  .vivus-14 {
    stroke-dasharray: 128 130;
    stroke-dashoffset: 129;
    animation: vivus-draw 137ms ease-out 1956ms forwards;
  }

  .vivus-15 {
    stroke-dasharray: 69 71;
    stroke-dashoffset: 70;
    animation: vivus-draw 74ms ease-out 2094ms forwards;
  }

  .vivus-16 {
    stroke-dasharray: 50 52;
    stroke-dashoffset: 51;
    animation: vivus-draw 54ms ease-out 2168ms forwards;
  }

  .vivus-17 {
    stroke-dasharray: 40 42;
    stroke-dashoffset: 41;
    animation: vivus-draw 43ms ease-out 2223ms forwards;
  }

  .vivus-18 {
    stroke-dasharray: 54 56;
    stroke-dashoffset: 55;
    animation: vivus-draw 58ms ease-out 2267ms forwards;
  }

  .vivus-19 {
    stroke-dasharray: 29 31;
    stroke-dashoffset: 30;
    animation: vivus-draw 32ms ease-out 2326ms forwards;
  }

  .vivus-20 {
    stroke-dasharray: 6 8;
    stroke-dashoffset: 7;
    animation: vivus-draw 7ms ease-out 2358ms forwards;
  }

  .vivus-21 {
    stroke-dasharray: 9 11;
    stroke-dashoffset: 10;
    animation: vivus-draw 10ms ease-out 2365ms forwards;
  }

  .vivus-22 {
    stroke-dasharray: 16 18;
    stroke-dashoffset: 17;
    animation: vivus-draw 18ms ease-out 2376ms forwards;
  }

  .vivus-23 {
    stroke-dasharray: 33 35;
    stroke-dashoffset: 34;
    animation: vivus-draw 36ms ease-out 2394ms forwards;
  }

  .vivus-24 {
    stroke-dasharray: 10 12;
    stroke-dashoffset: 11;
    animation: vivus-draw 11ms ease-out 2431ms forwards;
  }

  .vivus-25 {
    stroke-dasharray: 9 11;
    stroke-dashoffset: 10;
    animation: vivus-draw 10ms ease-out 2442ms forwards;
  }

  .vivus-26 {
    stroke-dasharray: 9 11;
    stroke-dashoffset: 10;
    animation: vivus-draw 10ms ease-out 2453ms forwards;
  }

  .vivus-27 {
    stroke-dasharray: 60 62;
    stroke-dashoffset: 61;
    animation: vivus-draw 65ms ease-out 2464ms forwards;
  }

  .vivus-28 {
    stroke-dasharray: 36 38;
    stroke-dashoffset: 37;
    animation: vivus-draw 39ms ease-out 2529ms forwards;
  }

  .vivus-29 {
    stroke-dasharray: 23 25;
    stroke-dashoffset: 24;
    animation: vivus-draw 25ms ease-out 2568ms forwards;
  }

  .vivus-30 {
    stroke-dasharray: 51 53;
    stroke-dashoffset: 52;
    animation: vivus-draw 55ms ease-out 2594ms forwards;
  }

  .vivus-31 {
    stroke-dasharray: 15 17;
    stroke-dashoffset: 16;
    animation: vivus-draw 17ms ease-out 2650ms forwards;
  }

  .vivus-32 {
    stroke-dasharray: 2 4;
    stroke-dashoffset: 3;
    animation: vivus-draw 3ms ease-out 2667ms forwards;
  }

  .vivus-33 {
    stroke-dasharray: 19 21;
    stroke-dashoffset: 20;
    animation: vivus-draw 21ms ease-out 2670ms forwards;
  }

  .vivus-34 {
    stroke-dasharray: 11 13;
    stroke-dashoffset: 12;
    animation: vivus-draw 12ms ease-out 2691ms forwards;
  }

  .vivus-35 {
    stroke-dasharray: 36 38;
    stroke-dashoffset: 37;
    animation: vivus-draw 39ms ease-out 2704ms forwards;
  }

  .vivus-36 {
    stroke-dasharray: 2 4;
    stroke-dashoffset: 3;
    animation: vivus-draw 3ms ease-out 2744ms forwards;
  }

  .vivus-37 {
    stroke-dasharray: 9 11;
    stroke-dashoffset: 10;
    animation: vivus-draw 10ms ease-out 2747ms forwards;
  }

  .vivus-38 {
    stroke-dasharray: 10 12;
    stroke-dashoffset: 11;
    animation: vivus-draw 11ms ease-out 2758ms forwards;
  }

  .vivus-39 {
    stroke-dasharray: 99 101;
    stroke-dashoffset: 100;
    animation: vivus-draw 106ms ease-out 2770ms forwards;
  }

  .vivus-40 {
    stroke-dasharray: 114 116;
    stroke-dashoffset: 115;
    animation: vivus-draw 122ms ease-out 2877ms forwards;
  }

  @keyframes vivus-draw {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes vivus-fade {
    0% {
      stroke-opacity: 1;
    }
    94.44444444444444% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }</style>

<svg class="self-portrait" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 270.93 270.93"
     version="1.1">
  <path
      d="m117.87 52.04c-3.02 5.58-5.32 11.96-6.55 17.64-0.68 5.12-1.87 11.61-1.87 16.17 0.01 1.67 0.44 3.43 0.47 5.19 0.03 1.76-0.25 3.93-0.3 5.36 0.26 3.32-0.67 6.65-0.83 9.89-0.03 13.95 2.31 26.03 11.23 35.95 2.94 3.04 6.4 7.26 10.02 7.75 3.21-0.57 6.02 0.51 8.82 0.8 10.5 0.79 14.88-2.29 22.72-6.28 5.46-2.36 10.67-4.14 14.3-8.29 1.63-1.88 2.83-4.25 4.01-6.82 1.18-2.57 2.94-8.55 2.94-8.55 1.59 2.13 4.83 1.22 6.15-0.4 1.39-1.71 2.77-3.38 4.14-4.68 2.68-2.14 4.41-4.41 6.01-7.48"
      class="medium vivus-0"></path>
  <path
      d="m126.24 45.47c0 0 10.7-4.94 15.69-4.91 9.98 0.86 18.34 6.95 24.76 13.61 3.42 3.58 6.94 8.34 8.51 11.77 1.57 3.43 0.82 5.15 1.87 7.88 4.19 6.65 5.75 11.42 6.95 19.11 0.51 3.28-0.35 7.01 0.8 8.82 1.16 1.81 2.15 1.99 3.47 2 4.81-1.28 6.45-5.54 9.89-2 1.93 2.02 1.79 3.95 0.94 6.55 3.42-1.54 2.37-2.54 3.47-4.68 1.08-2.79 4.7-3.85 5.35-5.08 0.88-1.77 0.17-6.04-0.27-8.42-0.44-2.38-1.76-3.67-2-5.75-1.03-4.97 3.27-11.09 3.07-14.83-0.23-2.85-2.83-5.2-3.61-7.62-0.77-2.42-0.54-4.19-1.2-6.68-1.89-6.59-4.91-13.12-9.22-18.17-6.14-7.05-13.39-9.91-21.78-12.29-9.42-2.53-19.08-3.7-28.2-2-4.82 1.22-14.36 4.19-17.24 7.75-1.29 1.64-0.96 3.67-1.74 5.08-4.23 4.65-6.44 11.17-7.88 16.44 3.09-3.02 6.87-3.33 10.69-3.47 13.24-1.04 24.4 5.7 34.61 11.49 3.63 2.02 12.03 5.88 12.03 5.88"
      class="thick vivus-1"></path>
  <path
      d="m125.75 35.6c0 0-1.17-2.1-3.38-2.23-9.05 3.41-16.45 11.61-20.13 19.65-2.24 4.89-1.08 10.69-0.09 15.88 0.56 2.88 2.17 5.36 2.36 7.75 0.19 2.39-1.24 4.6-0.85 6.24 0.39 1.64 1.4 1.31 2.17 3.12 0.78 1.81 0.78 6.14 1.61 7.84 0.83 1.7 2.17 2.55 2.17 2.55"
      class="thick vivus-2"></path>
  <path d="m172.45 33.38c9.06 3.56 14.24 8.54 19.65 15.21 4.77 5.09 6.73 12.66 12.66 16.63"
        class="thin vivus-3"></path>
  <path d="m113.77 52.09c0 0-4.65-0.44-6.43 1.13-4.45 5.87-1.54 15.57 0.07 22.77"
        class="medium vivus-4"></path>
  <path
      d="m149.21 34.04c11.03 2.84 18.39 6.27 26.46 12.66 11.38 9.01 10.71 23.5 15.59 34.21 3.97 6.15 8.95 10.45 14.55 15.21"
      class="thin vivus-5"></path>
  <path
      d="m122.56 144.69c-1.36 4.95-8.07 7.82-11.62 12.28-5.61 7.4-6.35 14.78-6.24 23.81 0.98 11.27 3.35 22.86 1.89 34.96-0.8 5.99-3.86 8.03-3.78 13.04 0.08 5.01 5.55 8.67 5.1 15.69-0.44 7.02-9.65 14.25-10.96 23.25-1.31 9 4.35 28.54 4.35 28.54"
      class="thick vivus-6"></path>
  <path
      d="m130.03 149.99c-0.9 12.48 10.5 18.15 13.42 26.26 1.1 3.29 2.5 6.55-0.38 12.1-6.25 12.03-6.73 19.95-6.24 32.88"
      class="medium vivus-7"></path>
  <path
      d="m194.44 113.91c0 0 5.44 7.52 6.28 11.49 0.84 3.97-2.04 6.67-0.94 11.23 1.11 4.56 8.29 9.15 8.95 14.3 0.66 5.15-4.09 9.13-4.28 13.63-0.18 4.5 0.93 7.58 2.81 12.43 1.87 4.85 7.01 11.46 9.09 16.04 2.08 4.58 3.34 5.47 3.88 11.09 0.54 5.62-3.29 15.76-3.21 21.92 0.08 6.16 0.38 9.24 2.54 14.57 2.16 5.33 10.35 9.46 11.09 16.3 0.75 6.84-6.77 13.1-8.02 20.05-1.24 6.94 5.35 10.82 0.53 20.71-4.82 9.89-35.79 19.44-36.35 26.99-0.55 7.56 0.13 0.13 0.13 0.13"
      class="thick vivus-8"></path>
  <path
      d="m179.87 129.41c-0.91 13.02-0.47 26.76-2.27 39.56-0.76 5.14-3.29 6.11-2.27 10.02 5.2 7.82 14.56 13.91 14.3 23.79-0.23 4.6-5.87 6.68-5.88 12.03 2.51 12.43 14.04 23.24 16.57 29.27 3.8 9.29 8.15 44.5 8.15 44.5"
      class="medium vivus-9"></path>
  <path
      d="m132.1 160.19c-0.46 7.51 5.18 14.91 6.43 20.6 1.08 7.3-1.52 14.38-2.46 20.79-3.56 14.1 0.26 22.75 3.02 35.34 1.32 6.24 3.53 12.06 3.4 18.71-0.13 6.65-4.54 20.41-4.54 20.41"
      class="thin vivus-10"></path>
  <path
      d="m183.75 214.81c-2.7 9.37-4.84 22.7-2.41 31.27 5.9 11.53 16.22 21.84 16.97 33.68-0.9 13.93-5.91 25.71-11.63 38.62"
      class="medium vivus-11"></path>
  <path
      d="m112.45 129.19c-4.15 8.36 0.57 16.86 0.09 25.23-0.3 5.06-4.39 7.5-9.26 11.72-4.87 4.21-12.9 4.03-17.86 6.33-2.58 1.28-5.48 4.72-5.48 4.72"
      class="medium vivus-12"></path>
  <path
      d="m206.87 155.74c0 0 5.03 3.73 6.55 6.55 1.7 6.78 2.7 14.18 6.01 18.17 3.25 3.85 17.11 12.03 17.11 12.03"
      class="thin vivus-13"></path>
  <path
      d="m119.25 180.98c0 0-6.06 9.71-6.05 15.5 0.49 10.96 11.03 20.16 12.47 29.29 0.61 4.49-2.27 13.23-2.27 13.23-8.08 16.36-6.25 30.32-4.72 47.81l1.51 16.44"
      class="thin vivus-14"></path>
  <path
      d="m193.77 158.95c0 0-10.73 4.72-10.29 11.49 0.96 14.7 16.91 26.54 13.23 42.23-1.12 4.22-4.14 5.35-4.14 5.35"
      class="thin vivus-15"></path>
  <path
      d="m125.68 157.92c0 0-3.37 12.96-2.83 18.14 0.53 5.19 3.49 7.09 4.54 12.1 1.05 5.01 0.94 17.76 0.94 17.76"
      class="thin vivus-16"></path>
  <path d="m202.72 192.76c6.19 14.82 2.09 23.33-3.07 37.69" class="thin vivus-17"></path>
  <path
      d="m132.5 123.94c0.76 0.04 2.21-0.71 3.14-0.8 2.25-0.33 4.02 0.86 6.15 1.54 1.96 0.6 3.71 0.93 5.75 1.2-2.24 0.96-4.62 2.13-6.55 3.34-1.66 1.04-3.23 2.56-5.08 2.87-0.94 0.14-1.93-0.32-2.74-0.33-0.81-0.01-1.2 0.33-2.07 0.2-0.87-0.13-2.02-0.6-2.94-1.2-1.75-1.27-2.91-2.85-3.94-4.74 0.62-1.36 1.77-2.55 3.14-3.07 1.55-0.64 2.66-0.03 3.88 0.53 0.45 0.2 0.5 0.43 1.27 0.47z"
      class="medium vivus-18"></path>
  <path
      d="m122.54 126.14c0 0 1-0.15 1.67-0.13 0.67 0.02 1.57 0.38 2.34 0.33 0.77-0.05 1.43-0.61 2.2-0.6 0.78 0.01 1.61 0.6 2.27 0.67 0.66 0.07 1.1-0.14 1.6-0.13 0.5 0 0.81 0.14 1.4 0.13 0.59-0.01 1.12-0.22 2.14-0.27 1.02-0.05 2.71 0.09 3.94 0.13 2.58 0.23 4.86 0.15 7.42-0.4 1.14-0.31 2.34-0.53 3.31-1.24"
      class="thin vivus-19"></path>
  <path d="m121.42 118.89c-1.04 1.56-1.86 3.18-2.36 4.91" class="thin vivus-20"></path>
  <path d="m150.81 117.66c3.96 1.63 3.99 1.76 6.33 5.01" class="thin vivus-21"></path>
  <path
      d="m143.16 108.4c0.63 1.65 0.98 3.66-0.28 4.91-1.72 1.5-3.66 0.41-5.48 0.38-1.6-0.02-2.64 0.3-3.59 1.61"
      class="medium vivus-22"></path>
  <path
      d="m128.04 85.25c2.3 3.27 2.29 4.02 1.83 7.31-0.48 3.1-0.79 6.83-1.73 9.32-0.96 2.53-2.46 4.84-2.65 7.37-0.33 2.78 0.69 4.31 2.74 6.24"
      class="medium vivus-23"></path>
  <path d="m126.57 114.5c-2.24-0.44-2.86-1.12-2.74-3.31 0.08-1.18 1.65-4.02 1.65-4.02"
        class="thin vivus-24"></path>
  <path d="m141.65 106.03c3.42 1.84 3.71 2.68 5.61 5.88" class="thin vivus-25"></path>
  <path d="m139.65 86.52c-1.69 3.59-1.23 4.34-0.67 8.15" class="thin vivus-26"></path>
  <path
      d="m144.67 81.19c4.3-1.13 8.95-1.73 13.89-2.46l12 4.63-11.72-7.75c-5.57 0.56-11.02 1.65-16.44 3.02l-0.19 1.8"
      class="medium vivus-27"></path>
  <path
      d="m123.93 83.15c-3.75-0.92-7.38-0.62-11.34-0.3l-3.14 2.47 2.67-4.74c4.5-0.9 8.99-1.93 13.03 0.4l0.21 1.54"
      class="medium vivus-28"></path>
  <path
      d="m146.8 86.92c1.29-0.75 3.21-1.77 4.14-1.9 0.83-0.12 2.4-0.01 3.57 0.07 2.36 0.14 4.78 0.49 6.75 1.24 2.3 0.88 4.15 2.04 5.75 3.91"
      class="thin vivus-29"></path>
  <path
      d="m165.27 90.03c-1.83-1.06-3.56-2.67-5.38-3.41-2.33-0.68-4.85-1.07-7.15-0.67-2.28 0.27-3.56 1.74-5.28 2.97-1.09 0.61-1.87 1.17-2.81 2.04 1.84 0.35 3.81 0.12 5.58 0.03 1.29-0.06 3.06-0.18 4.04-0.2 1.25 0.08 2.43 0.03 3.47-0.23 0.66-0.17 1.67-0.62 2.31-0.8 1.06-0.28 2.16-0.56 3.21-0.23 2.54 1.56 5.39 1.7 8.35 2.1"
      class="medium vivus-30"></path>
  <path d="m151.98 93.3c2.43 0.54 4.89 0.54 7.38 0.27 3-0.7 3.47-0.76 6.55 0.67"
        class="thin vivus-31"></path>
  <path transform="translate(0,-26.06665)" d="m147.83 115.18c-0.59 0.73-0.5 0.85-0.06 1.61"
        class="thin vivus-32"></path>
  <path
      d="m127.19 88.96c-1.6-1.54-3.56-2.04-5.68-2.1-2.17 0.23-4.39 0.41-6.35 1.34-1.97 1.12-2.6 2.08-2.71 4.21"
      class="thin vivus-33"></path>
  <path d="m124.55 94.94c-2.2 0.92-4.64 1.86-6.88 2.04-1.05 0.08-2.84-0.17-2.84-0.17"
        class="thin vivus-34"></path>
  <path
      d="m112.29 92.97c0 0 0.76-0.13 1.24-0.5 0.99-1.57 2.14-2.55 3.83-3.27 1.89-0.82 3.84-0.93 5.81-0.57 1.02 0.2 1.92 0.49 2.74 0.95 1.24 0.76 2.29 1.61 2.69 3.04-1.37 0.84-2.78 0.08-4.04 0.1-1.04 0.09-1.9 0.65-3.02 0.8-1.13 0.15-3.55 0.67-4.96 0.32-0.76-0.2-1.52-1.15-2.12-1.19-0.6-0.04-1.12 0.45-1.12 0.45"
      class="medium vivus-35"></path>
  <path d="m126.69 90.86c0.3 0.7 0.29 1.09 0.05 1.76" class="thin vivus-36"></path>
  <path
      d="m159.98 86.61c0.15 0.41 0.24 0.84 0.24 1.3 0 0.71-0.2 1.36-0.54 1.92m-5.4 0.95c-0.85-0.67-1.39-1.71-1.39-2.88 0-0.73 0.22-1.42 0.59-1.99"
      class="thick vivus-37"></path>
  <path
      d="m119.23 93.8c-0.89-0.67-1.47-1.74-1.47-2.94 0-0.71 0.2-1.37 0.55-1.94m6.36 0.22c0.27 0.51 0.43 1.1 0.43 1.72 0 0.67-0.18 1.31-0.5 1.85"
      class="thick vivus-38"></path>
  <path d="m206.33 172.71c8.16 2.1 21.28 6.15 27.82 8.83 21.46 12.49 31.27 32.11 40.63 54.24"
        class="thin vivus-39"></path>
  <path
      d="m105.57 172.18c-8 2.79-13.33 5.14-24.19 7.75-10.86 2.61-22.46 10.36-24.32 22.45-2.79 18.2 0.57 34.51-6.28 51.98"
      class="thin vivus-40"></path>
</svg>