function removeElement() {
    var show = document.getElementById("visible");
    if (show.style.display === "none") {
      show.style.display = "block";
    }else{
      show.style.display = "none";
    }
  
    var pv = document.getElementById("PV");
    if(pv.style.height == '1260px'){
    pv.style.height = '2200px';
    }else{
    pv.style.height = '1260px'
    }
    
    var c2 = document.getElementById("C2");
    if(c2.style.height == '800px'){
        c2.style.height = '1800px';
    }else{
        c2.style.height = '800px'
    }
}
var i = 0;
var images = [];
var time = 2000;
  
//Images List
images[0] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-101.jpg?resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-102.jpg?resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-103.jpg?resize=980:*';                  images[3] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-104.jpg?resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-105.jpg?resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-106.jpg?resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-107.jpg?resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-108.jpg?resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-109.jpg?resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-110.jpg?resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-111.jpg?resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-112.jpg?resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-113.jpg?resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-114.jpg?resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-115.jpg?resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-116.jpg?resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-117.jpg?resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-118.jpg?resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-131.jpg?resize=768:*&keepGifs=1';
images[19] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-132.jpg?resize=768:*&keepGifs=1';
images[20] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-134.jpg?resize=768:*&keepGifs=1';
images[21] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-136.jpg?resize=768:*&keepGifs=1';
images[22] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-141.jpg?resize=768:*&keepGifs=1';
images[23] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-142.jpg?resize=768:*&keepGifs=1';
images[24] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-143.jpg?resize=768:*&keepGifs=1';
images[25] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-148.jpg?resize=768:*&keepGifs=1';
images[26] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-149.jpg?resize=768:*&keepGifs=1';
images[27] = 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-152.jpg?resize=768:*&keepGifs=1';
                  
                  
                                
  
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