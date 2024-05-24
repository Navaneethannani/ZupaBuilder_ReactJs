import './blog.css'


function Blog(){
    return(
        <>
            <div id="blog">
                <div className="container4">
                    <h2 className="blog-title">The team</h2>
                    <div className="cen-para">
                        <center>
                            Cras id justo eget sapien scelerisque lacinia non a eros.
                            In a volutpat magna. Vivamus pretium urna at condi- mentum porta.
                            Phasellus mollis mauris dolor, a tincidunt mauris fringilla sit amet
                        </center>
                    </div>
                    <br /><br />
                    <div className="img-container">
                            <Person
                                imageSrc={"src/assets/images/emp-1.png"}
                                name="Robert Snowflake"
                                role="Main architect"
                            />
                            <Person
                                imageSrc={"src/assets/images/emp-2.png"} 
                                name="Sarah Smith"
                                role="Junior architect"
                            />
                            <Person
                                imageSrc={"src/assets/images/emp-3.png"}
                                name="Daniel Orange"
                                role="Senior builder"
                            />
                            <Person
                                imageSrc={"src/assets/images/emp-4.png"} 
                                name="Mike Richardson"
                                role="Junior builder"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}


const Person = ({ imageSrc, name, role }) => {
    return (
        <div className="pic">
            <div className="pics-hover">
                <img src={imageSrc} className="emp-img" alt={name}/>
                <div className="emp-icons">

                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href=""><i className="fa-brands fa-skype"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                
                </div>
                <h3>{name}</h3>
            </div>
            <center>{role}</center>
        </div>
    );
}

export default Blog