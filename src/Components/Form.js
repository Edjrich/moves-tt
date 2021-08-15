function Form({setSelectedCity}) {

    const getCity = (event) => {
        event.preventDefault();
        // console.log(event)
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        setSelectedCity(event.target[0].value)
        // setSelectedZip(event.target[1].value)
    }

    return (
        <>
            <form onSubmit={getCity}>
                    <label htmlFor='city'></label>
                    <input type='text' name='city' id='city' placeholder='Search by City' />
                    <label htmlFor='zip'> </label>
                    <input type='text' name='zip' id='zip' placeholder='Search by zip/postal code' /> 
                    <button type='submit'>Get that weather</button>
            </form>
        </>
    )
}

export default Form;