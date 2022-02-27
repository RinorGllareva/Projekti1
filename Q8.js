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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-101-1574292044.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-102-1574292044.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-103-1574292043.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-104-1574292044.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-105-1574292044.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-106-1574292043.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-107-1574292043.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-108-1574292047.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-109-1574292045.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-110-1574292043.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-111-1574292047.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-112-1574292046.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-113-1574292046.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-114-1574292046.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/audi-rs-q8-115-1574292046.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-101-1573833274.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-102-1573833274.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-103-1573833269.jpg?crop=1.00xw:0.892xh;0,0&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-105-1573833269.jpg?crop=1.00xw:0.892xh;0,0.0691xh&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-106-1573833273.jpg?crop=1.00xw:0.892xh;0,0.0714xh&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-201-1574127237.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-104-1573833271.jpg?crop=1.00xw:0.892xh;0,0.00691xh&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-202-1574127236.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-107-1573833273.jpg?crop=1.00xw:0.892xh;0,0.0115xh&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-108-1573833269.jpg?crop=1.00xw:0.892xh;0,0.0323xh&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-204-1574127236.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-203-1574127235.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-109-1573833268.jpg?crop=1.00xw:0.892xh;0,0&resize=980:*';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-205-1574127236.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-110-1573833272.jpg?crop=1.00xw:0.892xh;0,0.0622xh&resize=980:*';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-206-1574127236.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[31] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-113-1573833278.jpg?crop=1.00xw:0.892xh;0,0.0184xh&resize=768:*&keepGifs=1';
images[32] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-112-1573833277.jpg?crop=1.00xw:0.892xh;0,0.0392xh&resize=768:*&keepGifs=1';
images[33] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-207-1574127238.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[34] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-116-1573833278.jpg?crop=1.00xw:0.892xh;0,0.0530xh&resize=768:*&keepGifs=1';
images[35] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-118-1573833281.jpg?crop=1.00xw:0.892xh;0,0.0161xh&resize=768:*&keepGifs=1';
images[36] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs-q8-211-1574127240.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
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