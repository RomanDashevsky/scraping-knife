<p align="center">
  <img src="https://cdn4.iconfinder.com/data/icons/construction-machines-and-tools/64/scraper-masonry-tool-construction-512.png" width="120" alt="Nest Logo" />
</p>

[![GitHub license](https://img.shields.io/github/license/RomanDashevsky/scraping-knife.svg)](https://github.com/RomanDashevsky/scraping-knife/)
[![GitHub release](https://img.shields.io/github/release/RomanDashevsky/scraping-knife.svg)](https://github.com/RomanDashevsky/scraping-knife/releases/)
[![GitHub contributors](https://img.shields.io/github/contributors/RomanDashevsky/scraping-knife.svg)](https://github.com/RomanDashevsky/scraping-knife/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/RomanDashevsky/scraping-knife.svg)](https://github.com/RomanDashevsky/scraping-knife/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/RomanDashevsky/scraping-knife.svg)](https://github.com/RomanDashevsky/scraping-knife/pull/)
[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/dashevsky.roman%40gmail.com)

## Description

Scraping-knife is an aggregating tool that provides an easy way to add libraries to a web page when you scraping the page. 

## Install 

For npm:
```bash
npm install --save scraping-knife
```

For yarn:
```bash
yarn add scraping-knife
```

## Example

For example we can inject scraping-knife to web page by [puppeteer](https://github.com/puppeteer/puppeteer)

```js
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setBypassCSP(true);
await page.goto(pageUrl);
await page.addScriptTag({
  path: require.resolve('scraping-knife')
});

const results = await page.evaluate(async () => {
  return SK.$('#some-id').text();
});
await page.close();
await browser.close();
```

## License

[MIT licensed](LICENSE).