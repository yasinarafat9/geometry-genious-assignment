console.log('clcik')

document.getElementById('triangle-calculate').addEventListener('click',function(){

    //getting Input values of triangle
    const  triangleBString = document.getElementById('triangle-b').value;   
    const  triangleHString = document.getElementById('triangle-h').value;

    // converting to numbers
    const triangleB = parseFloat(triangleBString);
    const triangleH = parseFloat(triangleHString);
    console.log(triangleB + triangleH)

    const triangleArea = 0.5 * (triangleB * triangleH);
    console.log(triangleArea)

    const triangleName = document.getElementById('triangle').innerText
    console.log(triangleName)

    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${1}</td>
    <td>${triangleName}</td>
    <td>${triangleArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);

});

document.getElementById('rectrangle-calculate').addEventListener('click',function(){

    const rectrangleWString = document.getElementById('rectrangle-w').value;
    const rectrangleIString = document.getElementById('rectrangle-i').value;

    const rectrangleW = parseFloat(rectrangleWString);
    const rectrangleI = parseFloat(rectrangleIString);
    console.log(rectrangleI,rectrangleW)

    const rectrangleArea = rectrangleW * rectrangleI;
    console.log(rectrangleArea)

    const rectrangleName = document.getElementById('rectrangle').innerText
    console.log(rectrangleName)

    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${1}</td>
    <td>${rectrangleName}</td>
    <td>${rectrangleArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);


    
})
console.log('triangle')
console.log('rectrangle')
