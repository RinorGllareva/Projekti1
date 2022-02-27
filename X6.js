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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-101-1569964622.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-102-1569964623.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-103-1569964622.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-104-1569964624.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-105-1569964622.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-106-1569964622.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-107-1569964625.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-108-1569964624.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-109-1569964622.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-110-1569964625.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-111-1569964626.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-112-1569964625.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-113-1569964626.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-114-1569964627.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-115-1569964627.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-116-1569964627.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-117-1569964627.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-118-1569964628.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-119-1569964631.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-120-1569964629.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-121-1569964629.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-123-1569964629.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-124-1569964630.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-125-1569964632.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-126-1569964633.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-127-1569964632.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-x6-m-competition-128-1569964632.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
            

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