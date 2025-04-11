

const searchFun = () =>
{
let filter = document.getElementById("myTable").value.toUpperCase();

let myDiv0 = document.querySelector('.container');
let myDiv1 = myDiv0.querySelector(".container1");
let myDiv2 = myDiv1.querySelector(".tables");
let data = myDiv2.querySelectorAll('.table');

for(let i=0;i<data.length;i++)
{
    let h3 = data[i].querySelector('h3');
    if(h3)
    {
    let text1 = h3.textContent;
        if(text1.toUpperCase().indexOf(filter) > -1)
        {
            data[i].style.display = "block";
        }
        else
        {
            data[i].style.display ="none";
        }
    }
}
}


const menuFun = () =>
{
let filter = document.getElementById("myMenu").value.toUpperCase();

let myDiv0 = document.querySelector('.container');
let myDiv1 = myDiv0.querySelector(".container2");
let myDiv2 = myDiv1.querySelector(".products");
let data = myDiv2.querySelectorAll('.product');


for(let i=0;i<data.length;i++)
{
    let h3 = data[i].querySelector('h3');
    let p = data[i].querySelector('p');
    
    if(h3 || p)
    {
    let text1 = h3.textContent;
    let text2 = p.textContent;
    //console.log(text2);
        if(text1.toUpperCase().indexOf(filter) > -1 || text2.toUpperCase().indexOf(filter) > -1)
        {
            data[i].style.display = "block";
        }
        else
        {
            data[i].style.display ="none";
        }
    }
}


}


//2D Array

let arr2=new Array(3);
for(let i=0;i<3;i++)
arr2[i]=new Array(11);
for(let i=0;i<3;i++)
{
    for(let j=0;j<11;j++)
    arr2[i][j]=0;
}

//Adding items to the table....
let products = document.querySelectorAll(".product");

products.forEach( (product) => {
    product.addEventListener('dragstart' , (e)=>
{
   let h5 = e.target.querySelector('h5');
   let price = h5.querySelector(".price").textContent;
   e.dataTransfer.setData('text/plain', price);

   let itemName = e.target.querySelector('h3').textContent;
   e.dataTransfer.setData('name', itemName);
   let id=e.target.id;
   e.dataTransfer.setData('id',id);
})

} )



//selecting all tables
let tables = document.querySelectorAll(".table");

tables.forEach( (table) =>{
table.addEventListener("dragover", (e)=>{
e.preventDefault();
} );
   

table.addEventListener("drop", (e)=>{
        e.preventDefault();

        var price = parseFloat(e.dataTransfer.getData('text/plain'));
        var itemName = e.dataTransfer.getData('name');
        let idPro=parseInt(e.dataTransfer.getData('id'));
        console.log(idPro);

        //Updating Price here
        let h4 =e.target.closest('.table').querySelector('h4');
    
        let Rs = parseInt(h4.querySelector(".rs").textContent);

        console.log(h4,Rs)
        Rs = Rs + price;
        e.target.closest('.table').querySelector(".rs").textContent = Rs;

        //Updating no of items here
        let totalItems = parseInt(h4.querySelector(".items").textContent);
        totalItems++;
        e.target.closest('.table').querySelector(".items").textContent = totalItems;
       let idTbl=parseInt(e.target.closest('.table').id);
        console.log(e.target.closest('.table'));

      
        arr2[idTbl][idPro]=arr2[idTbl][idPro]+1;
        console.log(arr2);
    
    } );
}  )


let ite=["Veg Biryani","Chicken Biryani","Mutton Biryani","French fries","Apple juice","Lemon tea","Noodles", "Parotha","sandwich","cake","Biscuits"];
let prises =[200,300,400,180,80,40,170,160,220,275,95];

//NC
function popup(e) {
    document.querySelector('.modal').classList.add('unhide');

    let ide=parseInt(e.target.closest('.table').id);
    var tb = e.target.closest('.table');
    //document.querySelector('tb').classList.add('.color');
    console.log(ide)
    console.log(tb);

    let content='';
    var food='';
    var rate = 0;
    var servings= 0;
    var k=0;
 
    document.querySelector('table').innerHTML='';




   let mytr = document.createElement('tr');
   mytr.appendChild(document.createElement('th'));
   const mycap = mytr.appendChild(document.createElement('th'));
   mycap.innerHTML = `Table ${ide + 1} : Order details` ;

   document.querySelector("table").appendChild(mytr);
      mycap.setAttribute("colspan",4);

      
   const button = mytr.appendChild(document.createElement('th'));
   button.setAttribute('input','button');
   button.innerHTML= '<input type="button" value="X"  />';
   button.setAttribute('float','right');
   button.style.width='20px';
   button.addEventListener('click',cancel);
    
        let all=document.querySelectorAll('.table');
        all.forEach( function(aa)
        {
            aa.classList.remove('color');
        } )
        tb.classList.add('color')

    function cancel()
    {
        console.log("cancel is called");
        document.querySelector('.modal').classList.remove('unhide');
        document.querySelector('.modal').classList.add('hide');
        tb.classList.remove('color');  
    }
  

   

var tr = document.createElement('tr');
tr.style.border="2px, solid, black";
var td0 = tr.appendChild(document.createElement('td'));
var td1 = tr.appendChild(document.createElement('td'));
var td2 = tr.appendChild(document.createElement('td'));
var td3 = tr.appendChild(document.createElement('td'));
var td4 = tr.appendChild(document.createElement('td'));

td0.innerHTML='Si.no';
td1.innerHTML='Items';
td2.innerHTML='price';
td3.innerHTML='servings';
//td4.innerHTML=''; 
td3.setAttribute('colspan',2);
tr.style.backgroundColor='yellow'

document.querySelector('table').appendChild(tr);
var Total=0;
console.log(Total);

    for(let i=0;i<11;i++)
    { 
        if(arr2[ide][i]!=0)   //      servings * 
        {
            let one = ite[i];
            let two = arr2[ide][i];
            let three = prises[i]*arr2[ide][i];
            content=content + ite[i]+"    "+"Servings= "+arr2[ide][i]+"   "+"Rs."+prises[i]*arr2[ide][i]+"\n";

            var food = ite[i];
            var rate = prises[i]*arr2[ide][i];
            var servings = arr2[ide][i];
            Total = Total + rate;
            var tr = document.createElement('tr');
            tr.setAttribute('id',`${i}`);
            var td0 = tr.appendChild(document.createElement('td'));
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));
            td3.style.display="none";
            var td4 = tr.appendChild(document.createElement('td'));
            td4.colSpan=2
            var td5 = tr.appendChild(document.createElement('td'));
           
            ++k;
            td0.innerHTML=k;
            td1.innerHTML=food;
            td2.innerHTML=rate; 
            td3.innerHTML=servings;
          
            //  td4.setAttribute('colspan',2);
            td4.innerHTML = `<input type="number" min="1" value=${servings} id="servings-${i}" />`;
           
            // td5.setAttribute('input','button');
            td5.innerHTML = '<i class="fa fa-trash" aria-hidden="true" onclick="dele"></i>';

            td5.addEventListener('click',dele)
            //console.log("inside if total is"+Total);
            //                                                                            
            function dele()
            {
               
                const inputElem = this.closest('tr');
                idee=document.querySelector('.table');
                console.log(tb);
                tb.querySelector(".rs").innerHTML = parseInt(tb.querySelector(".rs").innerHTML) - prises[i] * arr2[ide][i];
                tb.querySelector(".items").innerHTML =parseInt(tb.querySelector(".items").innerHTML) -arr2[ide][i];
                var ti= tb.querySelector(".items").innerHTML;
                console.log("in dele func rate is"+rate);
                console.log("price is "+prises[i])
               
                Total = Total - prises[i] * arr2[ide][i];       
                console.log("in dele func total is"+Total);
                console.log(i,inputElem)
                document.querySelector('#total').innerHTML=Total;
                const Table= document.querySelector(`table`)  
        
               console.log( document.querySelector(`table`))
           
               document.querySelector("table").deleteRow(this.parentElement.rowIndex);
               console.log(this.parentElement.rowIndex)

                arr2[ide][i]=0;
              
                popup(e);

            }

                      //change function

            td4.addEventListener("change", function() {
                let inn=parseInt(this.querySelector('input').value)
               console.log(this)
            
               itemId=parseInt(this.closest('tr').id);
               let par=this.closest('tr');
               console.log(par)
               console.log(itemId)
               console.log(par.querySelector('tr  :nth-child(3)'))
               console.log(inn,rate)
               const res=inn * rate;           

                let before =arr2[ide][itemId]
               par.querySelector('tr  :nth-child(3)').innerHTML = parseInt(par.querySelector('tr  :nth-child(3)').innerHTML)+(inn-before)*prises[itemId];    //new price
              
               arr2[ide][itemId]=inn;
              
              console.log(arr2[ide][itemId],ide,itemId);
                
                console.log(rate)
                const elll=document.getElementById(`${ide}`);
                console.log(elll)
    
           console.log(par.closest('.modal').querySelector('#total'))

                let trrrr=parseInt(elll.querySelector('.rs').innerHTML)+(inn-before)*prises[itemId];

                elll.querySelector('.rs').innerHTML=parseInt(elll.querySelector('.rs').innerHTML)+(inn-before)*prises[itemId];
                //parseInt(elll.querySelector('.rs').innerHTML)+(inn-before)*prises[itemId];
                par.closest('.modal').querySelector('#total').innerHTML='Total='+trrrr;

                elll.querySelector('.items').innerHTML=parseInt(elll.querySelector('.items').innerHTML)+(inn-before);
                console.log(elll);

               
            });

            document.querySelector('table').appendChild(tr);


           
        }
        // console.log("after for loop total is"+Total);
    }
    console.log("after func total is"+Total);
    console.log(content)
    content = content+`Your Total is= ${Total}`; 

    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));

    td1.innerHTML="Total="+Total; 
    td1.setAttribute('colspan',2);
    td1.setAttribute('id','total');
    td1.style.backgroundColor="lightBlue";

    td2.innerHTML="Close Session (Generate BILL)";
    td2.setAttribute('colspan',4);
    td2.setAttribute('id','bill');
    //td2.setAttribute('onclick','bill');
    td2.style.backgroundColor="red";
    
    td2.addEventListener('click',bill);
    document.querySelector('table').appendChild(tr);
    //Billing
    function bill()
    {

        let yy='';
        let xyzzz=0;
        for(let r=0;r<11;r++)
        {
            if(arr2[ide][r]!=0)
            {

                yy=yy+ite[r]+" Servings "+arr2[ide][r]+' Rs.'+prises[r]+'\n';
                xyzzz=xyzzz+arr2[ide][r]*prises[r]
                console.log(arr2[ide][r],prises[r])
            }
        }
        yy = yy+"Total="+xyzzz;
        alert(yy);
    
            console.log("hiding");
            var modal = document.querySelector('.modal');
            modal.classList.remove('hide');
            modal.classList.add('unhide');
            setTimeout(function() {
                modal.classList.remove('unhide');
                modal.classList.add('hide');
              }, 0);
              console.log("deleting data"+" "+ ide );
              var table = document.getElementById('ide');
              console.log(tb);
              tb.querySelector(".items").innerHTML=0;
              tb.querySelector(".rs").innerHTML =0;

            content="";
            food = '';
            rate = 0;
            servings = 0;
           // arr2=new Array(3);
            for(let y=0;y<11;y++)
            arr2[ide][y]=0;
          
            document.querySelectorAll('.table').forEach(table => {
                table.classList.remove("color");
                table.classList.add("table-color");
              });
            

    }

}


























































 












     <
