const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const externalPackages = new Set([
  '@nestjs/microservices',
  '@nestjs/swagger',
  'ioredis',
  'argon2',
]);

module.exports = {
  externals: [
    ({ request }, callback) => {
      if (externalPackages.has(request)) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    },
  ],
  ignoreWarnings: [/Failed to parse source map/],
  resolve: {
    alias: {
      // webpack statically resolves both branches in @nestjs/mapped-types
      'class-transformer/storage': require.resolve(
        'class-transformer/cjs/storage',
      ),
    },
  },
  output: {
    path: join(__dirname, 'dist'),

    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      useTsconfigPaths: true,
      mergeExternals: true,
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: true,
      outputHashing: 'none',
      generatePackageJson: false,
      sourceMap: true,
    }),
  ],
};
