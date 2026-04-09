function slugify(value){
  return value.toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
}

function getQueryParam(key) {
  return new URLSearchParams(location.search).get(key);
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function assetExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export { slugify, getQueryParam, randomFrom, assetExists };
