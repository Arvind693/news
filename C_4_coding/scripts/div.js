
async function getdata(url){

    var res = await fetch(url)
    var data = await res.json()
    return data
}
var click_arr = JSON.parse(localStorage.getItem("click_news"))||[]
function appenddatadiv(data,parent){
    data.forEach(ele => {
        var div = document.createElement("div")

        var img = document.createElement("img")
        img.src=ele.urlToImage

        var p = document.createElement("h2")
        p.textContent=ele.title

        var p1 = document.createElement("p")
        p1.textContent=ele.content
        p1.setAttribute("id","cursive")
        

        var p2 = document.createElement("p")
        p2.textContent=ele.source.name

        div.append(img,p,p1,p2)

        parent.append(div)
    });
}

export {getdata,appenddatadiv} 