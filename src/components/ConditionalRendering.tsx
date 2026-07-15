function ConditionalRendering({ bool }: { bool?: boolean }) {

    // if (bool) {
    //     return (
    //         <>
    //             <p>Condition is true</p>
    //         </>
    //     );
    // } else {
    //     return (
    //         <>
    //             <p>Condition is false</p>
    //         </>
    //     );
    // }

    return <p>{bool ? "Condition is true" : "Condition is false"}</p>

}

export default ConditionalRendering;