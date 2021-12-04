import { JediTemplate } from "../templates/Jedi"
import { useSelector } from 'react-redux'



export const PreviewPage = () => {
    // console.log('resumeData', getResumeData());
    let data;

    useSelector((state) => {
        data = state.resumeData;
    })

    console.log(data);
    return (
        <div>
            <JediTemplate d={data} />
        </div>
    )

}