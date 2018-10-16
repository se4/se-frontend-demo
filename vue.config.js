module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/",
        // target: "http://172.17.162.62:8080/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
