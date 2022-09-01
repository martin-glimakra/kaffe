const Order = ({firstName, cups}) => {

    function SkickaPostRequest(firstName, cups) {
        console.log('SkickaPostRequest', firstName, cups)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                cups: cups
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log('bekräftelse från APIet', json));

    }

    return (
        <div>
            <p>Ditt namn: {firstName}</p>
            <p>Hur mycket kaffe: {cups}</p>
            <button onClick={() => SkickaPostRequest(firstName, cups)}> 
                Skicka beställningen till en databas 
            </button>
        </div>
    );
}
 
export default Order;