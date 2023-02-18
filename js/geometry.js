
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
    <td>${triangleArea}cm<sup>2</sup></td>
    <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
    `;
tableContainer.appendChild(tr);

});

// ------------------------- Rectrangle card Part ---------------------

document.getElementById('rectrangle-calculate').addEventListener('click',function(){
    
    serial += 1;
                    // getting Input values of rectrangle
    const rectrangleWString = document.getElementById('rectrangle-w').value;
    const rectrangleLString = document.getElementById('rectrangle-l').value;

                    // converting to numbers
    const rectrangleW = parseFloat(rectrangleWString);
    const rectrangleL = parseFloat(rectrangleLString);
    

                    //rectrangle area using the formula
    const rectrangleArea = rectrangleW * rectrangleL;
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
    <td>${rectrangleArea}cm<sup>2</sup></td>
    <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
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
                <td>${parallelogramArea}cm<sup>2</sup></td>
                <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
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
    <td>${rhombusArea}cm<sup>2</sup></td>
    <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
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
    <td>${pentagonArea}cm<sup>2</sup></td>
    <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
    `;
tableContainer.appendChild(tr);


    
})
// ------------------------- Ellipse -----------------------------------
document.getElementById('ellipse-calculate').addEventListener('click',function(){
    
    serial += 1;
                    // getting Input values 
    const ellipseAString = document.getElementById('ellipse-a').value;
    const ellipseBString = document.getElementById('ellipse-b').value;

                    // converting to numbers
    const ellipseA = parseFloat(ellipseAString);
    const ellipseB = parseFloat(ellipseBString);
    

                    // area using the formula
    const ellipseArea = 3.14 * (ellipseA * ellipseB);
    
                    //getting  innertext using id
    const ellipseName = document.getElementById('ellipse').innerText
    
                    // getting table container for creating new elements
    const tableContainer = document.getElementById('table-container');
                    // Writing innerHTML for 
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
    <td>${serial}</td>
    <td>${ellipseName}</td>
    <td>${ellipseArea}cm<sup>2</sup></td>
    <td><button class="btn-table" >Covert to m<sup>2</sup></button></td>
    `;
tableContainer.appendChild(tr);


    
})



// random color

// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
  
//   document.querySelector('card-made').addEventListener('mouseover', event => {
//         event.target.style.fill = randomColor();
//   });