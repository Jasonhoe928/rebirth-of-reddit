const request = (url, callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

const header = document.createElement('header');
bigBoxId.appendChild(header);

const div1 = document.createElement('div');
div1.id = 'div1Id';
bigBoxId.appendChild(div1);

const div2 = document.createElement('div');
div2.id = 'div2Id';
bigBoxId.appendChild(div2);



request('https://www.reddit.com/r/oddlysatisfying.json', res => {
  const data = JSON.parse(res.currentTarget.response);
  div1.innerHTML = data.data.children[24].data.title
  div2.innerHTML = data.data.children[23].data.title;
  let image = document.createElement('img');
  image.src = 'https://b.thumbs.redditmedia.com/PCMi7LsKrYKezgzltt_8mR7ELAPSqTj7QJ0ftPUbcsQ.jpg'
  div1.appendChild(image);
  console.log('response object', data.data.children)

})



// request(url, res => {
//   const data = JSON.parse(res.currentTarget.response);
//   console.log("data", data);
// });

// request('https://myotherrequest.com', res => {
//   //blah blah
// })

// let vid = document.createElement('video')
// let source = document.createElement('source')