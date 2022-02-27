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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-055-1639951049.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-059-1639951062.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-061-1639951061.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-066-1639951061.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-067-1639951054.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-068-1639951060.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-051-1639951035.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-069-1639951580.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-070-1639951595.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-071-1639951581.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-072-1639951594.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-073-1639951595.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-074-1639951581.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-075-1639951592.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-076-1639951582.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-077-1639951583.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-078-1639951603.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-079-1639951595.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-080-1639951617.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-083-1639951610.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-098-1639951857.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-091-1639951629.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-092-1639951626.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-097-1639951855.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-089-1639951624.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-099-1639951743.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-093-1639951630.jpg?crop=1xw:1xh;center,top&resize=768:*&keepGifs=1';

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