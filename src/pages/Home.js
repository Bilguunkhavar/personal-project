import React from 'react';
import { JediTemplate } from "../templates/Jedi"
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const HomePage = ({ resumeData, setResumeData }) => {
    const [data, setData] = useState(resumeData);
    const name = React.createRef();
    const email = React.createRef();
    const phone = React.createRef();

    const update = (event) => {
        event.preventDefault();
        const newData = {
            ...resumeData,
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
        }
        setData(newData);

        setResumeData(newData);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={(event) => update(event)}>
                        <div>
                            <label htmlFor="name">Name </label>
                            <input id="name" type="text" ref={name} />
                        </div>

                        <div>
                            <label htmlFor="email">Email </label>
                            <input id="email" type="text" ref={email} />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone </label>
                            <input id="phone" type="text" ref={phone} />
                        </div>


                        <div>
                            <button type="submit">Generate</button>
                        </div>
                    </form>

                </div>
                <div className="col">
                    <JediTemplate d={data} />
                    <Link to="preview">
                        <button type="button">Preview</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}