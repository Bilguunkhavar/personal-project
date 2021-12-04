import './Jedi.css'

// {
//     name, email, phone, website, linkedin, educations, skills, projects, experiences
// }

export const JediTemplate = ({ d }) => {
    const educations = d.educations.map(e => {
        return (
            <div>
                <h4 className="subtitle">
                    {e.name}
                </h4>
                <div className="d-flex justify-content-between">
                    <div>
                        {e.degree}
                    </div>
                    <div>
                        {e.date}
                    </div>
                </div>
            </div>
        )
    });

    const skills = d.skills.map(s => {
        return (
            <div>
                <strong>{s.name}:</strong> {s.list}
            </div>
        )
    });

    const projects = d.projects.map(p => {
        return (
            <div>
                <h4 className="subtitle">
                    {p.title}
                </h4>
                <h5 className="subsubtitle d-flex justify-content-between">
                    <div>
                        <i className="fa fa-caret-right"></i> {p.subtitle}
                    </div>
                    <div>
                        {p.date}
                    </div>
                </h5>
                <ul>
                    {p.bullets.map(b => <li>{b}</li>)}
                </ul>
            </div>
        )
    });

    const experiences = d.experiences.map(e => {
        return (
            <div>
                <h4 className="subtitle">
                    {e.name}
                </h4>
                <h5 className="subsubtitle d-flex justify-content-between">
                    <div>
                        <i className="fa fa-caret-right"></i> {e.title}
                    </div>
                    <div>
                        {e.date}
                    </div>
                </h5>
                <ul>
                    {e.bullets.map(b => <li>{b}</li>)}
                </ul>
                <strong>Skills Used:</strong> {e.skills}

            </div>
        )
    })

    return (
        <div>
            <section className="header">
                <h1 className="text-center">
                    {d.name}
                </h1>
                <h2 className="text-center">
                    <a href={"mailto:" + d.email}>
                        <i className="fa fa-envelope fa-lg"></i> {d.email}
                    </a>
                    |
                    <i className="fa fa-mobile-phone fa-lg"></i> {d.phone}
                    |
                    <a href={d.website.link}><i className="fa fa-globe fa-lg"></i> {d.website.text}</a>
                    |
                    <a href={d.linkedin.link}><i className="fa fa-linkedin fa-lg"></i> {d.linkedin.text}</a>
                </h2>
                <hr />
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-5">
                        <section>
                            <h3 className="title">
                                <i className="fa fa-graduation-cap"></i>
                                Education
                            </h3>

                            {educations}
                        </section>

                        <section>
                            <h3 className="title">
                                <i className="fa fa-tasks"></i>
                                Skills
                            </h3>
                            {skills}
                        </section>


                        <section>
                            <h3 className="title">
                                <i className="fa fa-graduation-cap"></i>
                                Projects
                            </h3>
                            {projects}

                        </section>

                        <section>
                            <h3 className="title">
                                <i className="fa fa-book"></i>
                                Publications
                            </h3>

                            <h4 className="subtitle">
                                The Strategy of Negotiation
                            </h4>
                            <h5 className="subsubtitle">
                                <i className="fa fa-caret-right"></i>
                                O Kenobi, Q Jinn
                            </h5>
                            <ul>
                                <li>
                                    37 BBY Coruscant Congress on Communication (CCC),
                                    501-66
                                </li>
                            </ul>

                            <h4 className="subtitle">
                                The Art of War: The Ultimate Guide to High-
                                Ground
                            </h4>
                            <h5 className="subsubtitle">
                                <i className="fa fa-caret-right"></i>
                                O Kenobi
                            </h5>
                            <ul>
                                <li>
                                    35 BBY Mandalore Congress on Battle (MCB), 212-22
                                </li>
                            </ul>
                        </section>


                        <section>
                            <h3 className="title">
                                <i className="fa fa-trophy"></i>
                                Awards and Recognition
                            </h3>
                            <ul>
                                <li>
                                    Single handedly helped to create the best villian in the
                                    galaxy
                                </li>
                                <li>
                                    Has a fetish of cutting off limbs. (2 Grievous, 3 Anakin,
                                    Half of Maul, Random guy in Cantina)
                                </li>
                                <li>
                                    Became a ghost in order to save The Gold Team
                                </li>
                            </ul>

                        </section>
                    </div>
                    <div className="col-7">
                        <section>
                            <h3 className="title">
                                <i className="fa fa-briefcase"></i>
                                Experience
                            </h3>
                            {experiences}
                        </section>

                        <section>
                            <h3 className="title">
                                <i className="fa fa-bolt"></i>
                                Teachings
                            </h3>

                            <h4 className="subtitle">
                                Luke Skywalker
                            </h4>
                            <h5 className="subsubtitle d-flex justify-content-between">
                                <div>
                                    <i className="fa fa-caret-right"></i>
                                    Tatooine, Alderaan
                                </div>
                                <div>
                                    0 BBY - 5 ABY
                                </div>
                            </h5>
                            <ul>
                                <li>
                                    Taught him basics about the Force, use your feelings blah blah
                                </li>
                                <li>
                                    Managed to destroy the 1st Death Star with my guidance
                                </li>
                                <li>
                                    Basically taught Luke to become a Jedi Master (From a certain point of view)
                                </li>
                            </ul>
                            <strong>Skills Used:</strong> Force projection, My wisdom

                            <h4 className="subtitle">
                                Anakin Skywalker
                            </h4>
                            <h5 className="subsubtitle d-flex justify-content-between">
                                <div>
                                    <i className="fa fa-caret-right"></i>
                                    Jedi Academy
                                </div>
                                <div>
                                    32 BBY - 22 BBY
                                </div>
                            </h5>
                            <ul>
                                <li>
                                    Successfully made a youngling into a Jedi Knight in 11 years
                                </li>
                                <li>
                                    Failed him because I was holding him back
                                </li>
                                <li>
                                    I taught him everything I know and he became a far greater Jedi than I've ever
                                    hoped to be
                                </li>
                                <li>
                                    Should have aimed for the neck instead
                                </li>
                                <li>
                                    Darth Vader is still mad at me for robbing his lightsaber
                                </li>
                            </ul>
                            <strong>Skills Used:</strong> The High-Ground, Form III, Patience

                        </section>

                    </div>

                </div>
            </section>

        </div>
    )
}
