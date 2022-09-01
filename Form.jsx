const Form = ({firstName, setFirstName, cups, handleCupChanges, setStep, message }) => {

    console.log('firstName', firstName)
    console.log('cups', cups)


    return (
    <div>
        <p>Namn</p>
        <input 
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="skriv ditt förnamn här"
        />
        <p>Kaffe</p>
        <input 
            type="number"
            value={cups}
            onChange={handleCupChanges}
            // onChange={(event) => setCups(event.target.value)}

        />
        <p>{message}</p>
        <button disabled={message} onClick={() => setStep('order')}> Gå vidare </button>
    </div>
    );
}
 
export default Form;