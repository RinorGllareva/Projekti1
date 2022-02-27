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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-223-edit-1616620323.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-307-edit-1616620324.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-272-1616620325.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-321-edit-1616620325.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-343-1616620327.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-186-edit-1616620320.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-208-edit-1616620322.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-190-edit-1616620320.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-183-edit-1616620320.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-186-edit-1616620320.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-210-edit-1616620325.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-110-1616620300.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-131-1616620303.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-124-1616620295.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-103-1616620302.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-104-1616620295.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-107-1616620295.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-121-1616620299.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-123-1616620297.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-115-1616620296.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-136-1616620305.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-156-1616620311.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-153-1616620312.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-165-1616620315.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-166-1616620316.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-170-1616620316.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-171-1616620316.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-175-1616620318.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-177-1616620319.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-181-1616620319.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-q5-45-premium-plus-245-1616620325.jpg?crop=1xw:1xh;center,top&resize=980:*';           

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