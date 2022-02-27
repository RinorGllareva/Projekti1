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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-101-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-102-1611684119.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-103-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-104-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-105-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-106-1611684119.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-107-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-108-1611684119.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-109-1611684117.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-110-1611684120.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-116-1611684123.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-117-1611684123.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-118-1611684125.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-119-1611684125.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-123-1611684128.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-124-1611684128.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-125-1611684128.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-126-1611684129.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-127-1611684129.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-132-1611684132.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-135-1611684133.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-136-1611684134.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-138-1611684135.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1  ';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-140-1611684137.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-146-1611684139.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-149-1611684141.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';

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