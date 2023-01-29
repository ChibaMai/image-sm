
let ul = document.getElementById("images")
// 获取图片数据
let images = image

// 生成元素
render(ul, images)

// 获取全部图片标签
const el = document.querySelectorAll('img')
const observer = lozad(el)
observer.observe();

function render(ele, images) {
  let html = "";

  for (let index = 0; index < images.length; index++) {
    html += 
    `
      <li class="item">
        <a href="/images/${images[index]}" alt="" target="_blank">
          <img 
            src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs" data-src="/images/${images[index]}" 
            alt="第${index}张"
            title="第${index}张"
          >
        </a>
      </li>
    `
  }

  ele.innerHTML = html;
}
