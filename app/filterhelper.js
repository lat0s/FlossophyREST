// filterHelper.js
function buildFilter(query, allowedFields) {
  const filter = {};
  for (const [key, value] of Object.entries(query)) {
    if (allowedFields.includes(key)) {
      filter[key] = value;
    }
  }
  return filter;
}

module.exports = { buildFilter };
