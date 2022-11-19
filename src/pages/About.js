import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
    return (

        <userContext.Consumer>
            {
                (object) => (
                    <Base>
                        <h1>This is about page</h1>
                        <p>We are building about website</p>
                        <p>Welcome User : {object.user.login && object.user.data.user.name}</p>
                        {console.log(object.user.data.user.id)}
                    </Base>
                )
            }
        </userContext.Consumer>

    );
};

export default About;