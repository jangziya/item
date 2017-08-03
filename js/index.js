window.onload=function(){

    var mBtn=document.querySelector('.m-btn');
    //点击按钮切换类名
    mBtn.onclick=function(){
        document.querySelector('.nav-left').classList.toggle('hidden-xs');
    }
}
