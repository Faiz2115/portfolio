import React, { useState } from 'react'

const Quotes = () => {


    const quotesData = [
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
        "Be yourself; everyone else is already taken.", "A room without books is like a body without a soul.", "You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth."

    ]

    const [quote, setQuote] = useState(quotesData)
    const [index, setIndex] = useState(0)


    return (
        <section className="quotes-section">
            <div className="title">
                <h1>
                    Quotes
                </h1>
            </div>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="quote">
                <h1> {quote[index]} </h1>

                <button onClick={() => index === 3 ? setIndex(0) : setIndex(index + 1)}>
                    NEXT
                </button>
            </div>
            <div className="box3"></div>
            <div className="box4"></div>
        </section>
    )
}

export default Quotes