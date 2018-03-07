const url = new URL(document.location);
const heading1 = document.querySelector('#heading1');
const heading2 = document.querySelector('#heading2');
const lpCopy = document.querySelector('#lp-copy');
const paramsH1 = url.searchParams.get("h1");
const paramsH2 = url.searchParams.get("h2");
const paramsLp = url.searchParams.get("lp");


if (paramsH1 != null) {
  heading1.innerText =  paramsH1;
}

if (paramsH2 != null) {
  heading2.innerText = paramsH2;
}


if (paramsLp != null) {
  lpCopy.innerText = paramsLp;
}


