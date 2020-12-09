const locations = [
    "simei CC","Bedok CC"
]
function api(req, res) {
  res.statusCode = 200;
  res.json(locations);
}

export default api;