import path from 'path';

export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/fonts/**',
      dist: 'dist/fonts/'
    }

  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerPort: 9000,
  eslintOverride: path.resolve(__dirname, 'customEslintrc'),
  scsslint: true
};
