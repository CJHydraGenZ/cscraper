const axios = require('axios');
const cheerio = require('cheerio');
// const fetch = require('node-fetch')
function Scrape() {
  return new Promise(async (resolve, reject) => {

    try {
      // const data = await fetch('https://mirrorkomik.com/').then(res => res.text())
      const { data } = await axios.get('https://mirrorkomik.com/')
      const $ = cheerio.load(data);
      // const result = []
      const obj = {}
      obj.result = []
      // obj.endpoint = 'hallo'
      $('.tpe1 > .tpe1_1').each((i, el) => {
        const title = $(el).find('a').find('.htipe1 > h3').text()
        const views = $(el).find('a').find('.htipe1 > div').text()
        const thumbnail = $(el).find('a').find('.gmb2 > .lazy').attr('data-src')
        const endpoint = $(el).find('a').attr('href').replace('https://mirrorkomik.com/', '')
        obj.result.push({
          title,
          views,
          thumbnail,
          endpoint
        })
      })
      // console.log(data);
      resolve(obj)
    } catch (error) {
      reject(error)
      console.log(error);
    }

    // axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url)
    //   .then(data => {
    //     var get_token = cheerio.load(data.data);
    //     var token = get_token("#token").attr("value");
    //     var params = {
    //       url: url,
    //       token: token,
    //     };
    //     var options = {
    //       url: 'https://downvideo.quora-wiki.com/system/action.php',
    //       method: "post",
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    //         "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
    //       },
    //       data: new URLSearchParams(Object.entries(params)),
    //     };
    //     axios.request(options)
    //       .then(data => {
    //         resolve({
    //           coder: 'Loli Killers',
    //           title: data.data.title,
    //           thumbnail: data.data.thumbnail,
    //           duration: data.data.duration,
    //           result: data.data.medias,
    //           warning: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
    //         });
    //       })
    //       .catch(error => {
    //         reject(error);
    //         console.log(error)
    //       });
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     reject(error);
    //   });
  });
}
module.exports.Scrape = Scrape;