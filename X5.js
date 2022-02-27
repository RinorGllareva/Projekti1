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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-130-1582911132.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-131-1582911132.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-132-1582911133.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-133-1582911133.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-134-1582911134.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-135-1582911134.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-136-1582911135.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-137-1582911135.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-138-1582911136.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-139-1582911136.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-140-1582911136.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-116-1582911125.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-117-1582911125.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-118-1582911126.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-119-1582911127.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-120-1582911127.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-121-1582911128.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-162-1582911145.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-123-1582911129.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-165-1582911147.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-166-1582911147.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x5-m-167-1582911151.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';

            

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