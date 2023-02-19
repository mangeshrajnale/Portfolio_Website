import React from 'react';

const Branding = () => {
    const data = [
        {
            id: "01",
            heading: "Digital Branding",
            desc: "Digital Marketing is the term used for the targeted, measurable, and interactive marketing of products.",
        },
        {
            id: "02",
            heading: "Team Management",
            desc: "Team management refers to the various activities which bind a team together by bringing the team.",
        },
        {
            id: "03",
            heading: "Creative Mind",
            desc: "The Creative Mind: An Introduction to Metaphysics (1946) is a collection of essays and lectures concerning.",
        },
    ]
  return (
    <>
        <section className="branding">
            <div className="container grid">
                {data.map((value) =>{
                    return(
                        <div className="box flex">
                            <div className="text">
                                <h1>{value.id}</h1>
                            </div>
                            <div className="para">
                                <h2>{value.heading}</h2>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Branding;
