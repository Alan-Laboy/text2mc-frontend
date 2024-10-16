import "./styles.css"

export default function Header(){

    return(

        <div className="site-header" style={{
            backgroundImage: `url(${require('./images/title-bg.png')})`,
        }}>
            <div className="title-container">
                <h1 className="Title">text2MC</h1>
            </div>
            
            
        </div>

    )

}

