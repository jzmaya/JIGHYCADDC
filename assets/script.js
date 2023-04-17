var page = "1";

function nextpage()
{
    page = String(Number(page) +1);
    console.log(page);
    loadPage();
    if (thereisslide(page)==false) {
        page = String(Number(page) -1);
    }
}
function prepage()
{
    page = String(Number(page) -1);
    console.log(page);
    loadPage();
    if (thereisslide(page)==false) {
        page = String(Number(page) +1);
    }
}

function loadPage()
{
    let slides = document.getElementsByClassName("slide");
    if (thereisslide(page)==true){
        for (i = 0; i < slides.length; i++) {
            if (slides[i].id == page)
            {
                slides[i].style.display = "";
                successshow();
            }
            else
            {
                slides[i].style.display = "none";
            }
        }
    }
}

function successshow(){
    var item = document.getElementsByClassName('success')[0];
    item.style.top = "10";
    setTimeout(()=>{
        item.style.top = "-50%";
    },1000);
}

function thereisslide(num){
    let slides = document.getElementsByClassName("slide");
    let there = false;
    for (i = 0; i < slides.length; i++) {
        if (slides[i].id == num)
        {
            there = true;
        }
    }
    return there;
}

function thereisslide(num){
    let slides = document.getElementsByClassName("slide");
    let thereis = false;
    for (i = 0; i < slides.length; i++) {
        if (slides[i].id == num)
        {
            thereis = true;
        }
    }
    return thereis;
}