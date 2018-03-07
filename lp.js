const url = new URL(document.location);
const heading1 = document.querySelector('#heading1');
const heading2 = document.querySelector('#heading2');
const paramsH1 = url.searchParams.get("h1");
const paramsH2 = url.searchParams.get("h2");


if (paramsH1 != null) {
  heading1.innerText =  paramsH1;
}

if (paramsH2 != null) {
  heading2.innerText = paramsH2;
}


