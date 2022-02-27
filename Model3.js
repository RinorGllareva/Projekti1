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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-103-1627583154.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-104-1627583155.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-105-1627583157.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-106-1627583158.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-107-1627583158.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-108-1627583154.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-101-1627583154.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-109-1627583158.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-110-1627583154.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-111-1627583158.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-112-1627583159.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-126-1574807035.jpg?crop=0.920xw:1.00xh;0,0&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-129-1574807037.jpg?crop=0.920xw:1.00xh;0,0&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-127-1574807036.jpg?crop=0.920xw:1.00xh;0,0&resize=768:*&keepGifs=1';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-146-1574807194.jpg?crop=0.9167690417690417xw:1xh;center,top&resize=768:*&keepGifs=1';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-152-1574807049.jpg?crop=0.9166539226181374xw:1xh;center,top&resize=768:*&keepGifs=1';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-153-1574807051.jpg?crop=0.920xw:1.00xh;0,0&resize=768:*&keepGifs=1';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-154-1574807051.jpg?crop=0.920xw:1.00xh;0,0&resize=768:*&keepGifs=1';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-120-1574807032.jpg?crop=0.920xw:1.00xh;0.0801xw,0&resize=768:*&keepGifs=1';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-110-1574807026.jpg?crop=0.920xw:1.00xh;0.0801xw,0&resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-123-1574807034.jpg?crop=0.920xw:1.00xh;0,0&resize=768:*&keepGifs=1';
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