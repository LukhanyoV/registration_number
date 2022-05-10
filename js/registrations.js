const RegistrationNumber = () => {
    let regNumber = ""
    const regNumbers = []
    const validTowns = ["CAA", "CA", "CY", "CJ", "CK", "CL"]
    
    // set the registration number if it is valid
    const setRegNumber = reg => regNumber = (validateRegNumber(reg)) ? reg : "Invalid registration number"
    // get the registration number
    const getRegNumber = () => regNumber
    
    // add valid registration number to array
    const addRegNumber = reg => !regNumbers.includes(reg) && validateRegNumber(reg) && regNumbers.push(reg)
    // get the valid registration number
    const getRegNumbers = () => regNumbers

    // filter registration numbers by town code
    const filterByTownCode = code => validTowns.includes(code) ? getRegNumbers().filter(item => item.includes(code)) : getRegNumbers()
    
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
        filterByTownCode
    }
}