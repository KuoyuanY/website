{ coded = "hkv5FgEG@3Am.im3"
  key = "cVTlDSHpWgjyGJEb4twM7ndUZFPkoIYOafsX85mr0NuhBeqRvLxKC6A19z3Q2i"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
$("#email").html("<a href='mailto:"+link+"'><i class='fa fa-envelope fa-2x fa-fw' aria-hidden='true'></i><span id='icon'>Email</span></a>")
}
var b = 0
$("#propic").click(function(event){
  if(b>=9){
    document.getElementById("propic").src="easter.png"
    var c = document.getElementById("propic")
    var ctx = c.getContext("2d")
    ctx.rotate(90*Math.PI/180)
    ctx.fillRect(50,20,100,50)
  }else{
    b++
    console.log(b)
  }
})
