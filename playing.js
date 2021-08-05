var vedioapp = /** @class */ (function () {
    function vedioapp() {
        var _this = this;
        this.vedioplay = document.getElementById("vedioPlayer");
        this.vedios = document.getElementById("myvedio");
        this.close = document.getElementById("close").addEventListener("click", function () { return _this.stopvedio(); });
        this.playmain = document.getElementById("play1").addEventListener("click", function () { return _this.playvedio('INCREDIBLE INDIA _ INDIA ---- IN 30 SEC(720P_HD).mp4'); });
        this.play1 = document.getElementById("1").addEventListener("click", function () { return _this.playvedio('Explore South African Safari in 15 Seconds(720P_HD).mp4'); });
        this.play2 = document.getElementById("2").addEventListener("click", function () { return _this.playvedio('Dubai In 30 Seconds - UAE(720P_HD).mp4'); });
        this.play3 = document.getElementById("3").addEventListener("click", function () { return _this.playvedio('PARIS IN 30 SECONDS(720P_HD).mp4'); });
    }
    vedioapp.prototype.playvedio = function (srcval) {
        this.vedios.src = srcval;
        this.vedioplay.style.display = "block";
    };
    vedioapp.prototype.stopvedio = function () {
        this.vedios.pause();
        console.log(this.vedios.src);
        this.vedioplay.style.display = "none";
    };
    return vedioapp;
}());
var start = new vedioapp();
