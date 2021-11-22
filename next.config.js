module.exports = {
  exportPathMap() {
		return {
			'/': { page: '/' },
		}
	},
  // https://github.com/vercel/next.js/issues/21079
  // Remove the workaround the issue is fixed
  reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "./",
    },
  };