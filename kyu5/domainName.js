function domainName(url) {
  let wwwPosition = url.search("www.");
  let slashPosition = url.search("://");
  let domainName;
  if (wwwPosition != -1) {
    domainName = url.slice((wwwPosition + 4), url.length);
  } else if (slashPosition != -1) {
    domainName = url.slice((slashPosition + 3), url.length)
  }
  domainName = domainName.slice(0, domainName.indexOf('.'));
  console.log(domainName);
}

domainName("https://www.cnet.com")