import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
    return (

        <userContext.Consumer>
            {
                (user) => (
                    <Base>
                        <h1>This is about page</h1>
                        <p>We are building about website</p>
                        <p>Welcome User : {user.name}</p>
                    </Base>
                )
            }
        </userContext.Consumer>

    );
};

export default About;