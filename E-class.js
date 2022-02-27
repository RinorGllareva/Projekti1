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
images[0] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-101-1604280336.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[1] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-102-1604280319.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[2] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-103-1604280349.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[3] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-104-1604280307.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[4] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-105-1604280321.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[5] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-106-1604280299.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[6] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-107-1604280340.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[7] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-108-1604280375.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[8] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-109-1604280303.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[9] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-110-1604280322.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[10] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-111-1604280379.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[11] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-113-1604280359.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[12] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-114-1604280379.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[13] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-115-1604280377.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[14] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-116-1604280375.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[15] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-117-1604280391.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[16] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-118-1604280404.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[17] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-119-1604280420.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[18] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-120-1604280432.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[19] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-121-1604280416.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[20] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-122-1604280428.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[21] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-123-1604280423.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[22] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-124-1604280438.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[23] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-125-1604280449.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[24] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-126-1604280456.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[25] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-127-1604280455.jpg?crop=1xw:1xh;center,top&resize=980:*';
images[26] = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-128-1604280456.jpg?crop=1xw:1xh;center,top&resize=980:*';              

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