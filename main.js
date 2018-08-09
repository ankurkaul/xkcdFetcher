
$(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            fetchCartoons(i,10);
        }
    });

function fetchCartoon(id) {
    if(id%2==0){
        side = "Right";
    }
    else{
        side = "Left";
    }
    fetchData(id,side);

}

function fetchCartoons(startId,number){
    for(i=startId;i<startId+number;i++){
        fetchCartoon(i);
    }

}

function fetchData(id,side){
    var xkcdAPI = 'http://xkcd.com/'+id+'/info.0.json'
    fetch(xkcdAPI)
    .then(result => result.json())
    .then(data => {
        var strip = '<li><div><img src='+data.img+' class="responsive-image"></img></div></li>';
        var tagline = 'The fetcher has so far fetched '+id+' Cartoons';
    document.getElementById(side).insertAdjacentHTML('beforeend', strip);
    document.getElementById('tagline').innerHTML = tagline;
        
    });
}

