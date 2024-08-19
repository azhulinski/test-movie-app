import "../css/Movies.css"

export default () => {

    return (
        <div className="grid">
            <article className="card movie-item">
                <header className="card__header">
                    <h1 className="movie__title">The silence of the lambs</h1>
                </header>
                <div className="card__image">
                    <img
                        src="https://play-lh.googleusercontent.com/8Zyaxu-u4c_mfuC37GPGRUqiuTDLDjthcXY3NU6THy_nOvzG82zIBX9QkVe44UPNvcU"
                        alt=""/>
                </div>
                <div className="card__content">
                    <h2 className="movie__director">director</h2>
                    <p className="movie__description">description</p>
                </div>
                <div className="card__actions">
                    <a href="" className="btn">Details</a>
                </div>
            </article>
        </div>
    )
}