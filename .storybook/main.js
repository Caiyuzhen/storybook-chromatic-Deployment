module.exports = {
//   stories: ['../src/**/*.stories.js'],
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  refs: {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "Design System",
      // The url provided by Chromatic when it was published
      url: "https://main--62c7f82d34e6e12f9fdbc97d.chromatic.com",
    },
  },
};
