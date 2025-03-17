let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

//function bookMark() {
/*bookmarks.push( '"' + __uv$config.decodeUrl(document.querySelector(".frame_top").contentWindow.location.href.replace("https://" + location.host, "").replace("/u/liftoff/", "")) + '"');
  localStorage.setItem("bookmarks", bookmarks)
  const book = document.createElement("div");
  book.classList.add("box");
  book.innerHTML = `<button class="svg-bttn" onclick="launch('${__uv$config.decodeUrl(document.querySelector(".frame_top").contentWindow.location.href.replace("https://" + location.host, "").replace("/u/liftoff/", ""))}')">`
  document.querySelector(".box-container").appendChild(book);*/
//alert("nobodycares hasnt made this yet (hes so stupid right)")
//}

function bookMark() {
    bookmarks.push(
        __uv$config.decodeUrl(
            document
                .querySelector('.frame_top')
                .contentWindow.location.href.replace(
                    'https://' + location.host,
                    ''
                )
                .replace('/u/liftoff/', '')
        )
    )
    localStorage.setItem('bookmarks', bookmarks)
}

document.addEventListener('keydown', function (event) {
    if (event.altKey) {
        switch (event.key) {
            case 't':
                newTab()
                break
            case 'w':
                rmTab(currentFrame.id)
                break
            case 'm':
                music()
                break
            case 'h':
                home()
                break
            case 'c':
                copy()
                break
            case 'r':
                refresh()
                break
            case 37:
                back()
                break
        }
    }
})
