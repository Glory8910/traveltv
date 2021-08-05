

class vedioapp {

    vedioplay = document.getElementById("vedioPlayer")
    vedios = document.getElementById("myvedio") as HTMLVideoElement




    playvedio(srcval) {
        this.vedios.src = srcval

        this.vedioplay.style.display = "block"
    }

    stopvedio() {
       
        this.vedios.pause();
        console.log(this.vedios.src)
        this.vedioplay.style.display = "none"
    }
    close=document.getElementById("close").addEventListener("click",()=>this.stopvedio())
   
    playmain=document.getElementById("play1").addEventListener("click",()=>this.playvedio('INCREDIBLE INDIA _ INDIA ---- IN 30 SEC(720P_HD).mp4'))

    play1=document.getElementById("1").addEventListener("click",()=>this.playvedio('Explore South African Safari in 15 Seconds(720P_HD).mp4'))
    play2=document.getElementById("2").addEventListener("click",()=>this.playvedio('Dubai In 30 Seconds - UAE(720P_HD).mp4'))
    play3=document.getElementById("3").addEventListener("click",()=>this.playvedio('PARIS IN 30 SECONDS(720P_HD).mp4'))


}

let start=new vedioapp();