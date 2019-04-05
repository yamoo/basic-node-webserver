exports.logger = name => msg => {
  const date = new Date().toISOString();
  console.log(`[${date}][${name}] ${msg}`);
};
