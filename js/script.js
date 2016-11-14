(function(){
    headCol();
    number();
})()

function headCol(){
        var close = $(".header span");
        var main =$(".main")[0];
        close[0].onclick = function(e){
           e = e || widow.e;
            $(main).hide(1000);
            e.stopPropagation();
        }
        close[1].onclick = function(){
            main.style.height = "18px";
        }
        close[2].onclick = function(){
            main.style.height = "400px";
        }
        $(document).click(function(){
          $(main).show(1000);
        }

        )
}
var x="";
function number(){
    var name = $(".row div");

    clear(x);
    name.each(function(){
      $(this).bind("click",function(){
          //if(x == 0){x="";}
          x +=  $(this).attr("name");
          screen(x);
      })
    });
    $("#clear").unbind();

    clear();
    $("#equal").bind('click',function  (argument) {
      var a = $(".screen").html();
      var temp1 = a.match(/[0-9]+\.{0,1}[0-9]{0,2}/).join();
      console.log(temp1);
      var temp = a.match(/[\+\-\*\/][0-9]+\.{0,1}[0-9]{0,2}/g).join();
      var temp2 = temp.substring(1);
      var temp3 = a.match(/[\+\-\*\/]/g).join();
      switch (temp3) {
        case '+':
          x = parseFloat(temp1)+ parseFloat(temp2);
           screen(x); 
          break;
           case '-':
          x = parseFloat(temp1)- parseFloat(temp2);
           screen(x); 
          break;
           case '*':
          x = parseFloat(temp1)* parseFloat(temp2);
           screen(x); 
          break;
           case '/':
          x = parseFloat(temp1)/ parseFloat(temp2);
           screen(parseFloat(temp1)/ parseFloat(temp2)); 
          break;
        default:
          // statements_def
          break;
      }
    });
}

function clear(){
    $("#clear").click(function(){
        x = "";
        screen(x);
    })
}

function screen(e){
    $(".screen").html(e);
}
