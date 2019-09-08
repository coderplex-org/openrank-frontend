module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8000',
        ws: true,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      },
    },
  },
};
