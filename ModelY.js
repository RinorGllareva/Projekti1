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
images[0] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-17.jpg?fit=around%7C770:481.25';
images[1] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Long-Range-AWD-9.jpg?fit=around%7C770:481.25';
images[2] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-19.jpg?fit=around%7C770:481.25';
images[3] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-20.jpg?fit=around%7C770:481.25';
images[4] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-21.jpg?fit=around%7C770:481.25';
images[5] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-22.jpg?fit=around%7C770:481.25';
images[6] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-23.jpg?fit=around%7C770:481.25';
images[7] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-24.jpg?fit=around%7C770:481.25';
images[8] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-30.jpg?fit=around%7C770:481.25';
images[9] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-vs-Model-3-31.jpg?fit=around%7C770:481.25';
images[10] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-cargo-1.jpg?fit=around%7C770:481.25';
images[11] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-dashboard-1.jpg?fit=around%7C770:481.25';
images[12] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-dashboard-2.jpg?fit=around%7C770:481.25';
images[13] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-front-interior-seats-1.jpg?fit=around%7C770:481.25';
images[14] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-infotainment-system-1.jpg?fit=around%7C770:481.25';
images[15] = 'https://www.motortrend.com/uploads/sites/5/2020/05/2020-Tesla-Model-Y-Dual-Motor-Performance-AWD-front-three-quarter-2-1.jpg?fit=around%7C770:481.25';

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