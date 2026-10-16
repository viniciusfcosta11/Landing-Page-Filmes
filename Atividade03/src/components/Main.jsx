import React from 'react'

const Main = () => {
    return (
        <main className="main">
            <section className="col col1">
                <h2>Seus Filmes</h2>
                <p>Aqui, você pode escolher o filme que deseja assistir.</p>
                <p>Caso queira escolher mais, clique no botão.</p>
                <button className="more-button" type="button">
                    Mais
                </button>
            </section>

            <section className="cards" aria-label="Filmes disponíveis">
                <div className="card card1" role="img" aria-label="Ghostbusters: Afterlife" />
                <div className="card card2" role="img" aria-label="Transformers" />
                <div className="card card3" role="img" aria-label="Mowgli" />
                <div className="card card4" role="img" aria-label="Day Shift" />
                <div className="card card5" role="img" aria-label="Squid Game" />
                <div className="card card6" role="img" aria-label="Harry Potter" />
            </section>
        </main>
    )
}

export default Main
