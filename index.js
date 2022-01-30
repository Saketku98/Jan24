fetch('http://universities.hipolabs.com/search?country=india')
.then(res=>res.json())
.then(info => {
    let college = info;
   
    for (let i = 0; i < 100; i++){
        let name = college[i].name;
        let country = college[i].country;
        let web_pages = college[i].web_pages;
        let alpha_two_code = college[i].alpha_two_code;
        let domains = college[i].domains;
        let table = document.querySelector('table');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = '<td>' + name +'</td>' + '<td>' + country + '</td>' + '<td>' + web_pages + '</td>' + '<td>' + alpha_two_code +  '</td>' + '<td>' + domains +'</td>';
        table.appendChild(tableRow);
    }
})
