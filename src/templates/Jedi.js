import './Jedi.css'

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
    });

    const resume = (
        <div>
            <div className="header">
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
            </div>
            <div className="content">
                <div>
                    <h3 className="title">
                        <i className="fa fa-graduation-cap"></i> Education
                    </h3>

                    {educations}
                </div>

                <div>
                    <h3 className="title">
                        <i className="fa fa-tasks"></i> Skills
                    </h3>
                    {skills}
                </div>

                <section>
                    <h3 className="title">
                        <i className="fa fa-graduation-cap"></i> Projects
                    </h3>
                    {projects}
                </section>

                <section>
                    <h3 className="title">
                        <i className="fa fa-briefcase"></i> Experience
                    </h3>
                    {experiences}
                </section>
            </div>
        </div>
    )

    return resume;
}
