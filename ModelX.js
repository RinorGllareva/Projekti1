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
images[0] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_18-front-view-doors-open.jpg?fit=around%7C770:481.25';
images[1] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_02-three-quarter-front-side-view.jpg?fit=around%7C770:481.25';
images[2] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_16-front-detail.jpg?fit=around%7C770:481.25';
images[3] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_03-three-quarter-rear-side-view.jpg?fit=around%7C770:481.25';
images[4] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_03-three-quarter-rear-side-view.jpg?fit=around%7C770:481.25';
images[5] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_17-wheel.jpg?fit=around%7C770:481.25';
images[6] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_15-rear-detail.jpg?fit=around%7C770:481.25';
images[7] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_06-three-quarter-rear-side-view.jpg?fit=around%7C770:481.25';
images[8] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_13-trunk.jpg?fit=around%7C770:481.25';
images[9] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_14-top-view.jpg?fit=around%7C770:481.25';
images[10] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_10-interior.jpg?fit=around%7C770:481.25';
images[11] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_09-steering-wheel.jpg?fit=around%7C770:481.25';
images[12] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_07-interior-center-console.jpg?fit=around%7C770:481.25';
images[13] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_12-rear-seats.jpg?fit=around%7C770:481.25';
images[14] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_08-interior-center-console-displays.jpg?fit=around%7C770:481.25';
images[15] = 'https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-X_25-structural-schematic.jpg?fit=around%7C770:481.25';

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