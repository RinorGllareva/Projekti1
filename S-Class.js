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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-424-1631555022.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-458-1631555023.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-737-1631555024.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-787-1631555024.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-819-1631555027.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-876-1631555026.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-895-1631555026.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-1198-1631555027.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-1235-1631555027.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-1272-1631555027.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-1329-1631555029.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-1515-1631555030.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-135-1631555006.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-161-1631555010.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-166-1631555011.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-113-1631555010.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-196-1631555007.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-172-edit-1631555006.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-322-1631555022.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-266-1631555015.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-282-1631555018.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-310-1631555020.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-279-1631555020.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-242-1631555014.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-275-edit-1631555017.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-227-1631555014.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-312-1631555022.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-294-1631555018.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-222-1631555011.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-243-1631555014.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-123-1631555006.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[31] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-148-1631555010.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[32] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s580-180-1631555006.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';

            

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