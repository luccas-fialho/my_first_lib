import fetch from "node-fetch";

function handleError(error) {
  throw new Error(error.message);
}

async function statusCheck(URLArray) {
  try {
    const arrayStatus = await Promise
      .all(URLArray
        .map(async url => {
          const res = await fetch(url);
          return `${res.status} - ${res.statusText}`;
        }))
    return arrayStatus
  } catch (error) {
    handleError(error);
  }
}

function createURLArray(arrayLinks) {
  return arrayLinks
    .map(linkObject => Object
      .values(linkObject).join())
}

async function checkURLs(arrayLinks) {
  const links = createURLArray(arrayLinks);
  const statusLinks = await statusCheck(links);
  //spread operator
  const results = arrayLinks.map((obj, index) => ({
    ...obj,
    status: statusLinks[index]
  }))
  return results;
}

export default checkURLs;
