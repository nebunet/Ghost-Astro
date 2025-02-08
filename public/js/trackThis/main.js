function madness(table) {
let counter = 0 
table.forEach((h, index) => {
        setTimeout(() => {
            document.getElementById("finished").innerText = `${Math.floor((counter/table.length)*100)}% Finished`
            let x = document.createElement("iframe")
            x.src = __uv$config.prefix + __uv$config.encodeUrl(h)
            x.height = "1334"
            x.width = "750"
            x.style.visibility = "hidden"
            document.getElementById("hiddenArea").appendChild(x);
            counter++
        }, index * 500); 
        setTimeout(() => {document.getElementById("finished").innerHTML = "Finished"}, table.length*500)
    });
}
