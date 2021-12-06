module.exports = {
  devServer: {
    disableHostCheck: true,
    overlay: true,
    proxy: {
      "/": {
        target: "http://drkjhyuck.pythonanywhere.com/",
        pathRewrite: { "^/loca": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
