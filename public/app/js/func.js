function getQueryString() {
  const url = location.search;
  const query = url.substr(1);
  const result = {};
  query.split("&").forEach(function(part) {
    const item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}
