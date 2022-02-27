function removeElement() {
    var show = document.getElementById("visible");
    if (show.style.display === "none") {
      show.style.display = "block";
    }else{
      show.style.display = "none";
    }
  
    var pv = document.getElementById("PV");
    if(pv.style.height == '1260px'){
    pv.style.height = '2400px';
    }else{
    pv.style.height = '1260px'
    }
    
    var c2 = document.getElementById("C2");
    if(c2.style.height == '800px'){
        c2.style.height = '2000px';
    }else{
        c2.style.height = '800px'
    }
}
var i = 0;
var images = [];
var time = 2000;

//Images List
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-101-1637247546.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-102-1637247546.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-103-1637247545.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-104-1637247542.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-105-1637247546.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-106-1637247543.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-107-1637247542.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-108-1637247542.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-109-1637247542.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-110-1637247542.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-111-1637247546.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-112-1637247549.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-113-1637247549.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-116-1637247551.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-117-1637247551.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-118-1637247553.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-119-1637247553.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-120-1637247554.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-121-1637247554.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-122-1637247555.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-124-1637247557.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-125-1637247557.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-126-1637247557.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-127-1637247559.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-128-1637247560.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-129-1637247560.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-131-1637247561.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-132-1637247561.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-133-1637247563.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-135-1637247564.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-136-1637247565.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[31] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-137-1637247565.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[32] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-rs-e-tron-gt-138-1637247565.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
//Change Images
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()",time);
}

window.onload= changeImg;