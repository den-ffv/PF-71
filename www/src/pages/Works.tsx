import React from "react";
import Title from "../components/Title.tsx";
import Work from "../components/Work.tsx";

const Works = () => {
    return (
        <div>
            <Title title={'Work'}/>
            <Work
              title={'Title'}
              text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}
              img={'https://cdn.dribbble.com/userupload/4450624/file/original-9cb4c37bbad7724093bb6f5a61d88ada.png?resize=752x'}
            />
        </div>
    );
}
export default Works;