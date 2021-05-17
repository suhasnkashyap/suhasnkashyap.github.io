
 
   var j=1;

   if(j==1)
   {
     $.get('https://api.covid19india.org/state_district_wise.json', function (data) {
         console.log("Calling API...");
                 
                     for (let key in data) {
                         if (key === "Karnataka") {
                             let i = 0;
                             for (let district in data[key].districtData) {
                                 var x = tbval.insertRow();
                                 x.insertCell(0);
     
                                 tbval.rows[i+1].cells[0].innerHTML = district;
                                 tbval.rows[i+1].cells[0].style.background = '';
                                 tbval.rows[i+1].cells[0].style.color = '#fff';
     
                                 x.insertCell(1);
                                 tbval.rows[i+1].cells[1].innerHTML = data[key].districtData[district].confirmed;
                                 tbval.rows[i+1].cells[1].style.background = '#38A2E9';
                                   tbval.rows[i+1].cells[1].style.color = '#fff';
                                 x.insertCell(2);
                                 tbval.rows[i+1].cells[2].innerHTML = data[key].districtData[district].active;
                                 tbval.rows[i+1].cells[2].style.background = '#38A2E9';
                                       tbval.rows[i+1].cells[2].style.color = '#fff';
                                 x.insertCell(3);
                                 tbval.rows[i+1].cells[3].innerHTML = data[key].districtData[district].recovered;
                                 tbval.rows[i+1].cells[3].style.background = '#38A2E9';
                                 tbval.rows[i+1].cells[3].style.color = '#fff';
     
                                 x.insertCell(4);
                                 tbval.rows[i+1].cells[4].innerHTML = data[key].districtData[district].deceased;
                                 tbval.rows[i+1].cells[4].style.background = '#38A2E9';
                                 tbval.rows[i+1].cells[4].style.color = '#fff';
                                 
                                 i++;
                             }
                         }
                     }
                     
                 });
             
   }
 j++;


