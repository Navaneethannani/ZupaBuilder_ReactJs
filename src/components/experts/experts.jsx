import './experts.css'


function Experts(){
    return(
        <>
            <div id="experts">
                <div className="container2">
                    <h1>Experts</h1>
                    <p>Home / Experts</p>
                </div>
                <div>
                    <img src="src/assets/images/builderimg.png" id="img1" />
                    <h1 className="ex-heading"><span>Meet Our Experts</span></h1>
                    <div className="para">
                        <p className="para-1">
                            Pallentesque mauris turpis, finibus in felis non,vehicula
                            aliquam tortor. Etiam id gravida nibh.Praesent vitae est
                            elementum,sodales turpis vehicula.
                        </p>
                        <hr className="hr-line" />
                        <br/>
                        <p className="para-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut diam elit.
                            In ullamcorper feugiat quam vel dapibus. Nulla vel laoreet purus. Nulla vitae magna libero.
                            Praesent dapibus egestas justo, a ultrices risus eleifend nec. Praesent quis elementum neque.
                            Sed suscipit plac- erat lorem sit amet posuere. Quisque commodo efficitur interdum
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}
export default Experts