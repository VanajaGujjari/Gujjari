function loadJson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){

    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
}
    };
    xhr.send();
    }

    loadJson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    career(data.career);
    education(data.education);
    technical(data.technical);
    })


    var childTwo=document.querySelector(".details");
    function career(careerInfo){
    var careerP=document.createElement("p");
     var careerH=document.createElement("h2");
      var careerHr=document.createElement("hr");
    careerH.textContent=careerInfo.heading;
    careerP.textContent=careerInfo.info;
    childTwo.appendChild(careerH);
    childTwo.appendChild(careerP);
    careerH.appendChild(careerHr);
    }

    function education(education){
        var table=document.createElement("table");
        var heading=document.createElement("h2");
         var Hr=document.createElement("hr");
        var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
        heading.textContent=education[0].heading;
        table.border=2;


       var tr2="";
       for(var i=1;i<education.length;i++)
       {
        tr2+="<tr><td>"+education[i].degree+"</td><td>"+education[i].institute+"</td><td>"+education[i].data+"</td></tr>";
       }

      childTwo.appendChild(heading);
      childTwo.appendChild(table);
      heading.appendChild(Hr);
       table.innerHTML=tr1+tr2;

    }


   function technical(technical){
    
    var technicalH=document.createElement("h2");
    technicalH.textContent=technical[0].heading;

    childTwo.appendChild(technicalH);

    var Hr=document.createElement("hr");
    technicalH.appendChild(Hr);
    
for(var i=0;i<technical.length;i++){
  var titleH=document.createElement("h3");
  titleH.textContent=technical[i].title;
   var ul=document.createElement("ul");

  childTwo.appendChild(titleH);
 childTwo.appendChild(ul);
 console.log(technical[i].info.length);
  for(var j=0;j<technical[i].info.length;j++){
    var li=document.createElement("li");
    li.textContent=technical[i].info[j];
    ul.appendChild(li);
  }
  

}
  }