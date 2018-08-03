const request = (url, callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

const header = document.createElement('div');
header.id = 'headerId';
header.src = './assets/header_bg.svg';
bigBoxId.appendChild(header);

const picBox = document.createElement('div');
picBox.id = 'picBoxId'
bigBoxId.appendChild(picBox);

const logoDiv = document.createElement('img');
logoDiv.src = './assets/logo.svg';
logoDiv.id = 'logoDivId';
header.appendChild(logoDiv);

const navUlDiv = document.createElement('ul');
navUlDiv.id = 'ulDivId';
header.appendChild(navUlDiv);

const navLiDiv1 = document.createElement('li');
navLiDiv1.className = 'navLiId';
navUlDiv.appendChild(navLiDiv1);
const navLiDiv2 = document.createElement('li');
navLiDiv2.className = 'navLiId';
navUlDiv.appendChild(navLiDiv2);
const navLiDiv3 = document.createElement('li');
navLiDiv3.className = 'navLiId';
navUlDiv.appendChild(navLiDiv3);

navLiDiv1.innerHTML = 'Random';
navLiDiv2.innerHTML = 'Get Boards';
navLiDiv3.innerHTML = 'Get The App'


request('https://www.reddit.com/r/gaming.json', res => {
  const data = JSON.parse(res.currentTarget.response);
  for(let i = 0; i < 9; i++) {
    let createCardDiv = document.createElement('div');
    createCardDiv.className = 'bigDivClass';
    picBox.appendChild(createCardDiv);
    
    let createTitleDiv = document.createElement('div');
    createTitleDiv.className = 'titleDivClass';
    createTitleDiv.innerHTML = data.data.children[i].data.title;
    createCardDiv.appendChild(createTitleDiv);
    
    
    let image = document.createElement('img');
    image.className = 'imageClass';
    image.src = data.data.children[i].data.url
    createCardDiv.appendChild(image);
    
    let createCommentDiv = document.createElement('div');
    createCommentDiv.innerHTML = 'Comments: ' + data.data.children[i].data.num_comments;
    createCardDiv.appendChild(createCommentDiv);

    let createAuthorDiv = document.createElement('div')
    createAuthorDiv.innerHTML = 'Author: ' + data.data.children[i].data.author;
    createCardDiv.appendChild(createAuthorDiv);
    console.log(data.data.children[i].data)
  }
})

const createFooter = document.createElement('div');
createFooter.id = 'footerId';
bigBoxId.appendChild(createFooter);

const instagramImg = document.createElement('img');
instagramImg.src = './assets/instagram_grey.svg';
createFooter.appendChild(instagramImg);
const facebookImg = document.createElement('img');
facebookImg.src = './assets/facebook_grey.svg';
createFooter.appendChild(facebookImg);

// request(url, res => {
//   const data = JSON.parse(res.currentTarget.response);
//   console.log("data", data);
// });

// request('https://myotherrequest.com', res => {
//   //blah blah
// })

// let vid = document.createElement('video')
// let source = document.createElement('source')