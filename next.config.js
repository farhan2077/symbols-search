module.exports = {
  eslint: {
    dirs: ["pages", "utils", "components"],
  },
  webpack: (config, { dev, isServer }) => {
    // replace react with preact only in client prod build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
