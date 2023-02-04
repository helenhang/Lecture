function fun3(){
    console.log("3");
}
function fun2(){
    setTimeout(()=>{
        console.log("3")
    }， 3000
    );
}
function fun1(){
    console.log("3");
}

func1()
func2()
func3()