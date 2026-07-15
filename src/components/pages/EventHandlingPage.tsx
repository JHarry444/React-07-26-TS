function EventHandlingPage() {

    function handleClick() {
        alert("Button clicked!")
    }
    // look like event handlers (<button onclick='...'>) they're actually event listeners
    return (
        <>
            <h2 className="bloop">Event Handling</h2>
            <section>
                <h3>onClick</h3>
                <button onClick={handleClick}>Click Me</button>
            </section>

            <section>
                <h3>onChange</h3>
                {/* onChange in react is actually onInput */}
                <input type="text" onChange={(e) => console.log(e.target.value)} />
            </section>
        </>
    );
}

export default EventHandlingPage;