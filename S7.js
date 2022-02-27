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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-265-1586778474.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-327-1586778474.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-361-1586778476.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-365-1586778477.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-245-1586778477.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-341-1586778475.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-285-1586778474.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-296-1586778474.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-379-1586778477.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-184-hdr-1586778462.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-158-hdr-1586778460.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-131-hdr-1586778460.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-107-hdr-1586778459.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-113-hdr-1586778459.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-230-hdr-1586778471.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-218-hdr-1586778468.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-209-hdr-1586778466.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-212-hdr-1586778467.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-203-hdr-1586778465.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-227-hdr-1586778470.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-233-hdr-1586778471.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-221-hdr-1586778468.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-224-hdr-1586778470.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-200-hdr-1586778464.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-143-hdr-1586778456.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-146-hdr-1586778456.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-149-hdr-1586778459.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[27] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-185-hdr-1586778463.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[28] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-128-hdr-1586778457.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[29] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-191-hdr-1586778464.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-116-hdr-1586778459.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-119-hdr-1586778456.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[30] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-s7-sportback-prestige-122-hdr-1586778456.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
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