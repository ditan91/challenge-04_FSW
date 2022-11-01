const http = require('http');
const path = require("path");
const fs = require("fs");
const PUBLIC_DIRECTORY = path.join(__dirname, 'public')
const getHTML = (fileName) => {
  const htmlFileIndex = path.join(PUBLIC_DIRECTORY, fileName);
  const htmlIndex = fs.readFileSync(htmlFileIndex, 'utf8');

  return htmlIndex
}

const onRequest = (req, res) => {
  switch (req.url) {
    case "/":
      const htmlIndex = getHTML('index.html');

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(htmlIndex);

      return
    case "/test":
      const testIndex = getHTML('index.example.html');

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(testIndex);

      return
    case "/img1.png":
      const imgDir1 = path.join(PUBLIC_DIRECTORY + "/images", "Button carousel.png");
      const imgContent1 = fs.readFileSync(imgDir1);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent1, "binary");

      return  

    case "/img2.png":
      const imgDir2 = path.join(PUBLIC_DIRECTORY + "/images", "fi_chevron-down.png");
      const imgContent2 = fs.readFileSync(imgDir2);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent2, "binary");

      return
    case "/img3.png":
      const imgDir3 = path.join(PUBLIC_DIRECTORY + "/images", "Group 53.png");
      const imgContent3 = fs.readFileSync(imgDir3);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent3, "binary");

      return
    case "/img4.png":
      const imgDir4 = path.join(PUBLIC_DIRECTORY + "/images", "icon_24hrs.png");
      const imgContent4 = fs.readFileSync(imgDir4);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent4, "binary");

      return
    case "/img5.png":
      const imgDir5 = path.join(PUBLIC_DIRECTORY + "/images", "icon_complete.png");
      const imgContent5 = fs.readFileSync(imgDir5);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent5, "binary");

      return
    case "/img6.png":
      const imgDir6 = path.join(PUBLIC_DIRECTORY + "/images", "icon_facebook.png");
      const imgContent6 = fs.readFileSync(imgDir6);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent6, "binary");

      return
    case "/img7.png":
      const imgDir7 = path.join(PUBLIC_DIRECTORY + "/images", "icon_instagram.png");
      const imgContent7 = fs.readFileSync(imgDir7);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent7, "binary");

      return  

    case "/img8.png":
      const imgDir8 = path.join(PUBLIC_DIRECTORY + "/images", "icon_mail.png");
      const imgContent8 = fs.readFileSync(imgDir8);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent8, "binary");

      return
    case "/img9.png":
      const imgDir9 = path.join(PUBLIC_DIRECTORY + "/images", "icon_price.png");
      const imgContent9 = fs.readFileSync(imgDir9);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent9, "binary");

      return
    case "/img10.png":
      const imgDir10 = path.join(PUBLIC_DIRECTORY + "/images", "icon_professional.png");
      const imgContent10 = fs.readFileSync(imgDir10);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent10, "binary");

      return
    case "/img11.png":
      const imgDir11 = path.join(PUBLIC_DIRECTORY + "/images", "icon_twitch.png");
      const imgContent11 = fs.readFileSync(imgDir11);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent11, "binary");

      return
    case "/img12.png":
      const imgDir12 = path.join(PUBLIC_DIRECTORY + "/images", "icon_twitter.png");
      const imgContent12 = fs.readFileSync(imgDir12);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent12, "binary");

      return
    case "/img13.png":
      const imgDir13 = path.join(PUBLIC_DIRECTORY + "/images", "img_car.png");
      const imgContent13 = fs.readFileSync(imgDir13);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent13, "binary");

      return
    case "/img14.png":
      const imgDir14 = path.join(PUBLIC_DIRECTORY + "/images", "img_photo.png");
      const imgContent14 = fs.readFileSync(imgDir14);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent14, "binary");

      return  

    case "/img15.png":
      const imgDir15 = path.join(PUBLIC_DIRECTORY + "/images", "img_photo2.png");
      const imgContent15= fs.readFileSync(imgDir15);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent15, "binary");

      return
    case "/img16.png":
      const imgDir16 = path.join(PUBLIC_DIRECTORY + "/images", "img_service.png");
      const imgContent16 = fs.readFileSync(imgDir16);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent16, "binary");

      return
    case "/img17.png":
      const imgDir17 = path.join(PUBLIC_DIRECTORY + "/images", "logo.png");
      const imgContent17 = fs.readFileSync(imgDir17);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent17, "binary");

      return
    case "/img18.png":
      const imgDir18 = path.join(PUBLIC_DIRECTORY + "/images", "next.png");
      const imgContent18 = fs.readFileSync(imgDir18);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent18, "binary");

      return
    case "/img19.png":
      const imgDir19 = path.join(PUBLIC_DIRECTORY + "/images", "prev.png");
      const imgContent19 = fs.readFileSync(imgDir19);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent19, "binary");

      return
    case "/img20.png":
      const imgDir20 = path.join(PUBLIC_DIRECTORY + "/images", "Rate.png");
      const imgContent20 = fs.readFileSync(imgDir20);

      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      res.end(imgContent20, "binary");

      return
    case "/css":
      const dir = path.join(PUBLIC_DIRECTORY + "/css", "style.css");
      const content = fs.readFileSync(dir, 'utf8');

      res.setHeader('Content-Type', 'text/CSS');
      res.writeHead(200);
      res.end(content);

      return
    case "/owl1":
      const dir1 = path.join(PUBLIC_DIRECTORY + "/css", "docs.theme.min.css");
      const content1 = fs.readFileSync(dir1, 'utf8');

      res.setHeader('Content-Type', 'text/CSS');
      res.writeHead(200);
      res.end(content1);

      return
    case "/owl2":
      const dir2 = path.join(PUBLIC_DIRECTORY + "/css", "owl.carousel.min.css");
      const content2 = fs.readFileSync(dir2, 'utf8');

      res.setHeader('Content-Type', 'text/CSS');
      res.writeHead(200);
      res.end(content2);

      return
    case "/owl3":
      const dir3 = path.join(PUBLIC_DIRECTORY + "/css", "owl.theme.default.min.css");
      const content3 = fs.readFileSync(dir3, 'utf8');

      res.setHeader('Content-Type', 'text/CSS');
      res.writeHead(200);
      res.end(content3);

      return
    case "/js-owl-1":
      const dir4 = path.join(PUBLIC_DIRECTORY + "/js", "jquery.min.js");
      const content4 = fs.readFileSync(dir4, 'utf8');

      res.setHeader('Content-Type', 'text/javascript');
      res.writeHead(200);
      res.end(content4);

      return
    case "/js-owl-2":
      const dir5 = path.join(PUBLIC_DIRECTORY + "/js", "owl.carousel.js");
      const content5 = fs.readFileSync(dir5, 'utf8');

      res.setHeader('Content-Type', 'text/javascript');
      res.writeHead(200);
      res.end(content5);

      return
  }
  
}

const server = http.createServer(onRequest)

server.listen(8000, '127.0.0.1', () => {
  console.log("Server sudah berjalan, silakan buka http://localhost:8000");
})
