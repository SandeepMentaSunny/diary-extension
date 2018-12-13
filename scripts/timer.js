window.setInterval(function(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    console.log(date + '/' + month + '/' + year);
    this.getMeridian(hours);
    this.formatTime(hours, 'HOURS');

    if(minutes < 10){
        this.formatTime(minutes, 'MINUTES');
    }else{
        document.getElementById('minutes').innerHTML = minutes;
    }
    if(seconds < 10){
        this.formatTime(seconds, 'SECONDS');    
    }else{
        document.getElementById('seconds').innerHTML = seconds;
    }

    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month + 1;
    document.getElementById('year').innerHTML = year;
}, 1000);

function getMeridian(value){
    var meridian;
    switch(value){
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            meridian = 'PM';
            break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            meridian = 'AM';
            break;
    }
    document.getElementById('meridian').innerHTML = meridian;
}

function formatTime(value, type){
    var hours, minutes, seconds;
    if(type === 'HOURS'){
        switch(value){
            case 0:
                hours = "00";
                break;
            case 1:
                hours = "01";    
                break;
            case 2:
                hours = "02";    
                break;
            case 3: 
                hours = "03";    
                break;
            case 4:
                hours = "04";
                break;
            case 5:
                hours = "05";
                break;
            case 6:
                hours = "06";    
                break;
            case 7:
                hours = "07";
                break; 
            case 8:
                hours = "08";
                break;
            case 9:
                hours = "09";
                break;
            case 10:
                hours = "10";
                break;
            case 11:
                hours = "11";
                break;
            case 12:
                hours = "12";
                break;
            case 13:
                hours = "01";
                break;
            case 14:
                hours = "02";
                break;
            case 15:
                hours = "03";
                break;
            case 16:
                hours = "04";
                break;
            case 17:
                hours = "05";
                break;
            case 18:
                hours = "06";
                break;
                case 19:
                hours = "07";
                break;
            case 20:
                hours = "08";
                break;
            case 21:
                hours = "09";
                break;
            case 22:
                hours = "10";
                break;
            case 17:
                hours = "05";
                break;
            case 18:
                hours = "06";
                break;

        }
        document.getElementById('hours').innerHTML = hours;
    }
    if(type === 'MINUTES'){
        switch(value){
            case 0:
                minutes = "00";
                break;
            case 1:
                minutes = "01";    
                break;
            case 2:
                minutes = "02";    
                break;
            case 3: 
                minutes = "03";
                break;
            case 4:
                minutes = "04";
                break;
            case 5:
                minutes = "05";
                break;
            case 6:
                minutes = "06";    
                break;
            case 7:
                minutes = "07";
                break; 
            case 8:
                minutes = "08";
                break;
            case 9:
                minutes = "09";
                break;
        }
        document.getElementById('minutes').innerHTML = minutes;
    }
    if(type === 'SECONDS'){
        switch(value){
            case 0:
                seconds = "00";
                break;
            case 1:
                seconds = "01";
                break;
            case 2:
                seconds = "02";   
                break;
            case 3: 
                seconds = "03";  
                break;
            case 4:
                seconds = "04";
                break;
            case 5:
                seconds = "05";
                break;
            case 6:
                seconds = "06";  
                break;
            case 7:
                seconds = "07";
                break; 
            case 8:
                seconds = "08";
                break;
            case 9:
                seconds = "09";
                break;
        }
        document.getElementById('seconds').innerHTML = seconds;
    }
}