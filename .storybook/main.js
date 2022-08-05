module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {
          jsc: {
            experimental: {
              plugins: [
                [
                  "emotion-swc-plugin",
                  {
                    sourceMap: true,
                    autoLabel: 'dev-only',
                    labelFormat: '[local]',
                  },
                ],
              ],
            },
          },
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}