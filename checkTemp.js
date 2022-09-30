
    function checkTemp(n) {
        if(Number(n) <= 20 && Number(n) >=0) return -1
        if(Number(n) >=21 && Number(n) <= 40) return 0
        if(Number(n) >=41 && Number(n) <= 60) return 1
    }
