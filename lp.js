// params
const url = new URL(document.location);

// read info from params
const paramsH1 = url.searchParams.get("h1");
const paramsH2 = url.searchParams.get("h2");
const paramsLp = url.searchParams.get("lp");
const paramsLogo = url.searchParams.get("logo");
const paramsCta = url.searchParams.get("cta");
const paramsCtaUrl = url.searchParams.get("url");
const paramsContent = url.searchParams.get("content");
const paramsClass = url.searchParams.get("class");

// landing page elemets
const heading1 = document.querySelector('#heading1');
const heading2 = document.querySelector('#heading2');
const lpCopy = document.querySelector('#lp-copy');
const lpLogo = document.querySelector('#logo');
const lpContent = document.querySelector('#content');
const lpHolderDiv = document.querySelector('#holder');


// write info from params to lp elements
if (paramsH1 != null) {
  heading1.innerText =  paramsH1;
}

if (paramsH2 != null) {
  heading2.innerText = paramsH2;
}


if (paramsLp != null) {
  lpCopy.innerText = paramsLp;
}


if (paramsLogo != null) {
  lpLogo.src = paramsLogo;
}

if (paramsContent != null) {
  lpContent.src = paramsContent;
}

if (paramsClass != null) {
  lpHolderDiv.classList.add(paramsClass);
}

