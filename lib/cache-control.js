module.exports = {
  setHeader: function setCacheControl(res) {
    res.setHeader('Cache-Control', 'public,max-age=3600,s-maxage=3600');
  }
}