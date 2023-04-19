


(
    ()=>{
        let menu = document.querySelector(".menubar")
        let menuButton = document.querySelector(".menubutton")
        menuButton.addEventListener("click",()=>{
            if(menu.classList.contains("hidden")){
               return menu.classList.remove("hidden")
               
            }
            else{
                return menu.classList.add("hidden")
            }
        })
    }
)()

let carousel = ()=>{
    let imageArray={
        bg1:[{url:"./image/bg_1.jpg.webp",smallText:"WE GROW BUSINESSES1",majorText:"WE HELP YOUR BUNESSES AND INNOVATION GROW1"}],
        bg2:[{url:"./image/bg_2.jpg.webp",smallText:"WE GROW BUSINESSES2",majorText:"WE HELP YOUR BUNESSES AND INNOVATION GROW2"}],
        bg3:[{url:"./image/bg_3.jpg.webp",smallText:"WE GROW BUSINESSES3",majorText:"WE HELP YOUR BUNESSES AND INNOVATION GROW3"}],
       
    }
    //let imageArray=["./image/bg_1.jpg.webp","./image/bg_2.jpg.webp","./image/bg_3.jpg.webp"]
    let bg1 = document.querySelector(".bgclass")
    let text1 = document.querySelector(".bgclassText1")
    let text2 = document.querySelector(".bgclassText2")

    let imageIndex = 0

    bg1.style.backgroundImage=`url('${imageArray.bg1[0].url}')`
    text1.textContent=`${imageArray.bg1[0].smallText}`
    text2.textContent=`${imageArray.bg1[0].majorText}`

    let rollIt = ()=>{
      for (let i=0; i < Object.keys(imageArray).length; i++){
console.log(Object.keys(imageArray))
console.log("help")
      }
    }
    rollIt()
  
       
}
carousel()


