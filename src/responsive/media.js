//from chrome dev tools
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileTwoChairs: '640px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

//wrap the size cutoffs for css
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileTwoChairs: `(max-width: ${size.mobileTwoChairs})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

//common margins
const margins = {
  none: '0rem',
  main: '4rem',
};

export default device;
export { margins }