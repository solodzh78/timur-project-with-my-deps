export const buildSvgLoader = () => {
  console.log('buildSvgLoader');
  return ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
};
