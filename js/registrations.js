const RegistrationNumber = () => {
    let regNumber = ""
    let errorMsg = ""
    const regNumbers = []
    const validTowns = ["CAA", "CA", "CY", "CJ", "CK", "CL"]
    
    // set the registration number if it is valid
    const setRegNumber = reg => {
        reg = reg.trim().toUpperCase()
        if(validateRegNumber(reg) && !getRegNumbers().includes(reg)){
            regNumber = reg
        } else {
            if(getRegNumbers().includes(reg)){
                errorMsg = "Registration number already exists"
            } else {
                errorMsg = "Invalid registration number"
            }
        }
    }
    // get the registration number
    const getRegNumber = () => regNumber
    
    // add valid registration number to array
    const addRegNumber = reg => !regNumbers.includes(reg) && validateRegNumber(reg) && regNumbers.push(reg)
    // get the valid registration number
    const getRegNumbers = () => regNumbers

    // filter registration numbers by town code
    const filterByTownCode = code => validTowns.includes(code) ? getRegNumbers().filter(item => item.includes(code)) : getRegNumbers()
    
    // get the error message
    const getErrorMessage = () => errorMsg

    // reset everything
    const reset = () => {
        regNumber = ""
        errorMsg = ""
        regNumbers.splice(0,regNumbers.length)
    }

    // test to see if the user gave a valid registration number
    const validateRegNumber = reg => {
        const regex = /[A-Z]{2,3}\s[0-9]{3}(\-|\s)?[0-9]{3}/
        return (regex.test(reg) && validTowns.includes(reg.split(" ")[0]))
    }

    return {
        setRegNumber,
        getRegNumber,
        addRegNumber,
        getRegNumbers,
        filterByTownCode,
        getErrorMessage,
        reset
    }
}