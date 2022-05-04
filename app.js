// Dark Mode Toggle
document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}

//Check Leap Year
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 
        !==0) || (year % 100 === 0 && year % 400 === 0)
}