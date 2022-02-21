
async function getdata(url){

    var res = await fetch(url)
    var data = await res.json()
    return data
}
var click_arr = JSON.parse(localStorage.getItem("article"))||[]
function appenddata(data,parent){
    data.forEach(ele => {
        var div = document.createElement("div")
        div.setAttribute('id','container1')

        var img = document.createElement("img")
        img.setAttribute('id','images')
        img.src=ele.urlToImage

        var p = document.createElement("h2")
        p.textContent=ele.title

        // var p1 = document.createElement("p")
        // p1.textContent=ele.content
        // p1.setAttribute("id","cursive")

        var p2 = document.createElement("p")
        p2.textContent=ele.source.name


    div.onclick= ()=>{
        click_arr.push(ele)
        localStorage.setItem("article",JSON.stringify(click_arr))
        alert("This picture has been added")
        window.location.href="news.html"
    }


        div.append(img,p,p2)

        parent.append(div)
    });
}

export {getdata,appenddata} 