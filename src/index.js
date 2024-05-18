/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
    event.preventDefault();
    const formedData = new FormData(event.target)
    const { objectConversion } = Object.fromEntries(formedData)

    console.log('The final computed value', objectConversion)
};

document.getElementById('new-user-form').addEventListener('submit', handleSubmit)
