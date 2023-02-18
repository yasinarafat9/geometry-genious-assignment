
// for serial number in td
let serial = 0;
// ------------------------- Triangle card Part -----------------------
document.getElementById('triangle-calculate').addEventListener('click',function(){

    serial += 1;
                //getting Input values of triangle
    const  triangleBString = document.getElementById('triangle-b').value;   
    const  triangleHString = document.getElementById('triangle-h').value;

                // converting to numbers
    const triangleB = parseFloat(triangleBString);
    const triangleH = parseFloat(triangleHString);
    console.log(triangleB + triangleH)

                // Trangle area using the formula
    const triangleArea = 0.5 * (triangleB * triangleH);
    console.log(triangleArea)
                //getting Triangle innertext using id
    const triangleName = document.getElementById('triangle').innerText
    console.log(triangleName)
                // getting table container for creating new elements
    const tableContainer = document.getElementById('table-container');
                // Writing innerHTML for triangle
    const tr = document.createElement('tr');
    tr.innerHTML =     `
    <td>${serial}</td>
    <td>${triangleName}</td>
    <td>${triangleArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);

});

// ------------------------- Rectrangle card Part ---------------------

document.getElementById('rectrangle-calculate').addEventListener('click',function(){
    
    serial += 1;
                    // getting Input values of rectrangle
    const rectrangleWString = document.getElementById('rectrangle-w').value;
    const rectrangleIString = document.getElementById('rectrangle-i').value;

                    // converting to numbers
    const rectrangleW = parseFloat(rectrangleWString);
    const rectrangleI = parseFloat(rectrangleIString);
    console.log(rectrangleI,rectrangleW)

                    //rectrangle area using the formula
    const rectrangleArea = rectrangleW * rectrangleI;
    console.log(rectrangleArea)
                    //getting rectrangle innertext using id
    const rectrangleName = document.getElementById('rectrangle').innerText
    console.log(rectrangleName)
                    // getting table container for creating new elements
    const tableContainer = document.getElementById('table-container');
                    // Writing innerHTML for triangle
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${serial}</td>
    <td>${rectrangleName}</td>
    <td>${rectrangleArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);


    
})
// ------------------------- Parallelogram ----------------------------
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    serial += 1;
    // const b=10;
    // const h=12;
    // const parallelogramArea = b * h;

                    // getting Input values of parallelogram
                    const parallelogramBString = document.getElementById('parallelogram-b').value;
                    const parallelogramHString = document.getElementById('parallelogram-h').value;
                
                                    // converting to numbers
                    const parallelogramB = parseFloat(parallelogramBString);
                    const parallelogramH = parseFloat(parallelogramBString);
                    console.log(parallelogramB)
                
                                    //getting area using the formula
                    const parallelogramArea = parallelogramB * parallelogramH ;
                    console.log(parallelogramArea)

                //getting  innertext using id
                const parallelogramName = document.getElementById('Parallelogram').innerText
                console.log(parallelogramName)
                                // getting table container for creating new elements
                const tableContainer = document.getElementById('table-container');
                                // Writing innerHTML for table
                const tr = document.createElement('tr');
                tr.innerHTML = 
                `
                <td>${serial}</td>
                <td>${parallelogramName}</td>
                <td>${parallelogramArea}<small>cm</small>2</td>
                <td><button class="btn-table" >Covert to m2</button></td>
                `;
            tableContainer.appendChild(tr);
                
})
// ------------------------- Rhombus -----------------------------------
document.getElementById('rhombus-calculate').addEventListener('click',function(){
    
    serial += 1;
                    // getting Input values 
    const rhombusD1String = document.getElementById('rhombus-d1').value;
    const rhombusD2String = document.getElementById('rhombus-d2').value;

                    // converting to numbers
    const rhombusD1 = parseFloat(rhombusD1String);
    const rhombusD2 = parseFloat(rhombusD2String);
    

                    // area using the formula
    const rhombusArea = 0.5 * (rhombusD1 * rhombusD2);
    
                    //getting  innertext using id
    const rhombusName = document.getElementById('rhombus').innerText
    
                    // getting table container for creating new elements
    const tableContainer = document.getElementById('table-container');
                    // Writing innerHTML for 
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${serial}</td>
    <td>${rhombusName}</td>
    <td>${rhombusArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);


    
})
// ------------------------- pentagon -----------------------------------
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    
    serial += 1;
                    // getting Input values 
    const pentagonPString = document.getElementById('pentagon-p').value;
    const pentagonBString = document.getElementById('pentagon-b').value;

                    // converting to numbers
    const pentagonP = parseFloat(pentagonPString);
    const pentagonB = parseFloat(pentagonBString);
    

                    // area using the formula
    const pentagonArea = 0.5 * (pentagonP * pentagonB);
    
                    //getting  innertext using id
    const pentagonName = document.getElementById('pentagon').innerText
    
                    // getting table container for creating new elements
    const tableContainer = document.getElementById('table-container');
                    // Writing innerHTML for 
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${serial}</td>
    <td>${pentagonName}</td>
    <td>${pentagonArea}<small>cm</small>2</td>
    <td><button class="btn-table" >Covert to m2</button></td>
    `;
tableContainer.appendChild(tr);


    
})