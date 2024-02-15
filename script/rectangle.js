function rectangleAreaCalculate() {
    const rectrangleLengthInput = document.getElementById('rectangle-length');
    const rectrangleLengthText = rectrangleLengthInput.value;
    const length = parseFloat(rectrangleLengthText);
    console.log(length);


    const rectrangleWidthInput = document.getElementById('rectangle-width');
    const rectrangleWidthText = rectrangleWidthInput.value;
    const width = parseFloat(rectrangleWidthText);
    console.log(width);

    const area = length * width;
    console.log('Area of the rectangle is:', area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}