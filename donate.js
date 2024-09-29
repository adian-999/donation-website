


// for card--1
document.getElementById("donate-now-1").addEventListener('click', function(event) {
    event.preventDefault();

    const donate = parseFloat(document.getElementById("donate-noa").value); 
    const mainBalance = parseFloat(document.getElementsByClassName("main-balance")[0].innerText);
    const donated = parseFloat(document.getElementById("donated-noa").innerText); 

    if (isNaN(donate) || donate <= 0 || donate > mainBalance) {
        alert('Please enter a valid number');
    } else {
        const remainingBalance = mainBalance - donate;
        console.log(remainingBalance);
        document.getElementsByClassName('main-balance')[0].innerText = remainingBalance.toFixed(2); 

        const totalDonated = donated + donate;
        document.getElementById('donated-noa').innerText = totalDonated.toFixed(2); 

//  for history------------
        const li =document.createElement('li');
        
        li.innerText=`donated noakhali ${donate} tk, main balance now ${remainingBalance}`

        console.log(li);

        document.getElementById('history-container').appendChild(li);

        const p = document.createElement('p');
        const currentDate = new Date().toLocaleString();
        p.innerText = `date : ${currentDate} `;

        document.getElementById('history-container').appendChild(p);



    }
    
    
});

// for card--2
document.getElementById("donate-now-2").addEventListener('click', function(event) {
    event.preventDefault();

    const donate = parseFloat(document.getElementById("donate-feni").value); 
    const mainBalance = parseFloat(document.getElementsByClassName("main-balance")[0].innerText); 
    const donated = parseFloat(document.getElementById("donated-feni").innerText); 

    if (isNaN(donate) || donate <= 0 || donate > mainBalance) {
        alert('Please enter a valid number');
    } else {
        const remainingBalance = mainBalance - donate;
        console.log(remainingBalance);
        document.getElementsByClassName('main-balance')[0].innerText = remainingBalance.toFixed(2); 

        const totalDonated = donated + donate;
        document.getElementById('donated-feni').innerText = totalDonated.toFixed(2); 
        
        // for history

        const li =document.createElement('li');
        
        li.innerText=`donated Feni ${donate} tk, main balance now ${remainingBalance}`

        console.log(li);

        document.getElementById('history-container').appendChild(li);

        const p = document.createElement('p');
        const currentDate = new Date().toLocaleString();
        p.innerText = `date : ${currentDate} `;

        document.getElementById('history-container').appendChild(p);
    }
    
});


// -------card-3--------------


document.getElementById("donate-now-3").addEventListener('click', function(event) {
    event.preventDefault();

    const donate = parseFloat(document.getElementById("donate-aid").value); 
    const mainBalance = parseFloat(document.getElementsByClassName("main-balance")[0].innerText); 
    const donated = parseFloat(document.getElementById("donated-aid").innerText); 

    if (isNaN(donate) || donate <= 0 || donate > mainBalance) {
        alert('Please enter a valid number');
    } else {
        const remainingBalance = mainBalance - donate;
        console.log(remainingBalance);
        document.getElementsByClassName('main-balance')[0].innerText = remainingBalance.toFixed(2); 

        const totalDonated = donated + donate;
        document.getElementById('donated-aid').innerText = totalDonated.toFixed(2);
        
        // for history------------

        const li =document.createElement('li');
        
        li.innerText=`donated for Aid ${donate} tk, main balance now ${remainingBalance}`

        console.log(li);

        document.getElementById('history-container').appendChild(li);

        const p = document.createElement('p');
        const currentDate = new Date().toLocaleString();
        p.innerText = `date : ${currentDate} `;

        document.getElementById('history-container').appendChild(p);

        
        
        
    }
});

// for history tab-----


const historyTab =document.getElementById('history');

const donationTab=document.getElementById('donation-tab');


    historyTab.addEventListener('click',function(){
    historyTab.classList.add('font-bold', 'px-7', 'text-xl','bg-lime-400',);

    donationTab.classList.remove('font-bold', 'px-7', 'text-xl','bg-lime-400');

    document.getElementById('container').classList.add('hidden');

    document.getElementById('history-container').classList.remove('hidden');




    

    
})

// for donation tab------

donationTab.addEventListener('click', function(){
    donationTab.classList.add('font-bold', 'px-7', 'text-xl','bg-lime-400');

    historyTab.classList.remove('font-bold', 'px-7', 'text-xl','bg-lime-400');

    document.getElementById('container').classList.remove('hidden');

    document.getElementById('history-container').classList.add('hidden');
})


// for blog part----------------------


document.getElementById('blog').addEventListener('click',function(){
    document.getElementById('container').classList.add('hidden');
    document.getElementById('don-his').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('blog').classList.add('hidden');
    document.getElementById('faq').classList.remove('hidden');
})

// for home part-----------------

document.getElementById('home').addEventListener('click',function(){
    document.getElementById('container').classList.remove('hidden');
    document.getElementById('don-his').classList.remove('hidden');
    document.getElementById('faq').classList.add('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('blog').classList.remove('hidden');



})








