const url = new URL(document.location);
const heading1 = document.querySelector('#heading1');
heading1.innerText = url.searchParams.get("h1");
const heading2 = document.querySelector('#heading2');
heading2.innerText = url.searchParams.get("h2");
