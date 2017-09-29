function open_win(content, iframe, width, height){
    var win = document.createElement("div");
    win.className = 'window';
    win.id = Math.random().toString().replace('.', '1');
    win.style.width = width + 'px' || '100px';
    win.style.height = height + 'px' || '100px';
    
    win.style.left = (window.innerWidth - width)/2 + 'px';
    win.style.top = (window.innerHeight - height)/2 + 'px';
    
    
    win.style.zIndex = '1001';
    
    max_btn = '';
    
    if (iframe){
        max_btn = '<div class="max btn" onclick="wide_win(this)"></div>';
        content='<iframe frameborder=0 id="" width="100%" height="100%" src="'+content+'"></iframe>'
    }
    
    win.innerHTML = '<div class="win_head"><div class="close btn" onclick="close_win(this)"></div><div class="min btn" onclick="hide_win(this)"></div>'+max_btn+'</div><div class="win_body">'+content+'</div>';
    
    document.getElementById('desktop').appendChild(win);
    if (iframe){
        win.getElementsByClassName('win_body')[0].style.padding = '0px';
    }
    
     $( function() {
    $("#"+win.id).draggable();
  } );
    
    $("#"+win.id).on('mousedown', function(event) { 
    $(".window").css('z-index','1');
    $( this ).css('z-index','1000');
});
}

function close_win(win){
    win = win.parentElement.parentElement;
    win.parentElement.removeChild(win);
}

function hide_win(win){
    win = win.parentElement.parentElement;
    if (win.style.height != '21px'){
    win.getElementsByClassName('win_body')[0].style.display = 'none';
    win.setAttribute('prevh', win.style.height);
    win.style.height = '21px';  
    }
    else{
    win.getElementsByClassName('win_body')[0].style.display = 'block';
    win.style.height = win.getAttribute('prevh');
    }
}

function wide_win(win){
   win = win.parentElement.parentElement;
    window.open(win.getElementsByTagName('iframe')[0].src);
}

function changeBG(n){
    document.getElementsByTagName('body')[0].style.background = 'url(http://laskov.info/host/files/public/wallpaper/bg'+n+'.jpg) no-repeat center center';
    document.getElementsByTagName('body')[0].style.backgroundSize = 'cover';
}

//var count_bg = 0;
//setInterval(function(){
//    if (document.getElementsByClassName('window').length == 0)
//    if (count_bg < 5){
//        count_bg++;
//        changeBG(count_bg);
//    }
//    else{
//        count_bg = 0;
//    }
//},10*1000);