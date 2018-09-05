window.onload=function(){
    let one=document.getElementById('one')
    let two=document.getElementById('two')
    let num1=document.getElementById('num1')
    let num2=document.getElementById('num2')
    let inputs=document.getElementById('input')
    let arr1,arr2
    arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    arr2=localStorage.arr2?localStorage.arr2.split(","):[];

    function Update(){
        localStorage.arr1=arr1.join(",")
        localStorage.arr2=arr2.join(",")
        one.innerHTML=""
        two.innerHTML=""
        num1.innerHTML=arr1.length
        num2.innerHTML=arr2.length
        arr1.forEach(function(value,i){
            let box=document.createElement('div')
            box.className="box"
            let input=document.createElement('input')
            input.setAttribute("type","checkbox")
            input.onclick=function(){
                arr1.splice(i,1)
                arr2.unshift(value)
                Update()
            }
            let p=document.createElement('p')
            p.innerHTML=`${value}`
            p.ondblclick=function(){
                let input=document.createElement('input')
                let text=p.innerText;
                p.innerText=""
                input.value=text
                input.onblur=function(){
                    arr1.splice(i,1,input.value)
                    Update()
                }
                p.appendChild(input)
                input.focus()
            }
            let del=document.createElement('div')
            del.className="del"
            del.onclick=function(){
                arr1.splice(i,1)
                Update()
            }
            box.appendChild(input)
            box.appendChild(p)
            box.appendChild(del)
            one.appendChild(box)
        })
        arr2.forEach(function(value,i){
            let box=document.createElement('div')
            box.className="box"
            let input=document.createElement('input')
            input.setAttribute("type","checkbox")
            input.setAttribute("checked","checked")
            input.onclick=function(){
                arr2.splice(i,1)
                arr1.unshift(value)
                Update()
            }
            let p=document.createElement('p')
            p.innerHTML=`${value}`
            let del=document.createElement('div')
            del.className="del"
            del.onclick=function(){
                arr2.splice(i,1)
                Update()
            }
            box.appendChild(input)
            box.appendChild(p)
            box.appendChild(del)
            two.appendChild(box)
        })
    }
    Update()
    inputs.onkeydown=function(e){
        if(e.keyCode==13&&this.value!=""){
            console.log(this.value)
            arr1.unshift(this.value)
            this.value=""
            Update()
        }
    }
















}