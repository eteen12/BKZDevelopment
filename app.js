const express = require('express');
const app = express();

app.use((req, res) => {
  res.redirect('https://teletadevelopment.com');
});