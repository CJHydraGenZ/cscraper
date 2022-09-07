// import fetch from "node-fetch"
// import * as cheerio from "cheerio"

const { Scrape } = require("./scraping");

function getMirrorComic(n) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Scrape()
      resolve(data)
    } catch (error) {
      reject(error)
      console.log(error);
    }
  })
}

module.exports = {
  getMirrorComic
}