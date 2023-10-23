const form =document.querySelector('form')

form.addEventListener('submit' , function (e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const resultsbio=document.querySelector('#resultsbio');
     

   
        const bmi =(weight / ((height * height ) / 10000)).toFixed(2);
        results.innerHTML= `${bmi}`
        console.log(bmi)
    



    if( bmi  < 19 )
    {
        resultsbio.innerHTML="you are under weight";
    }
    else if(bmi >= 18 && bmi <=24 )
    {
        resultsbio.innerHTML="you are Normal range weight";
    }
    else if(bmi >= 24 )
    {
        resultsbio.innerHTML="you are over  weight";
    }
   
     else{
        
        resultsbio.innerHTML="Re enter the data";
     }


     
})