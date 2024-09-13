import React from "react";
import Title from "../components/Title.tsx";
import Note from "../components/Note.tsx";

const Notes = () => {
    return (
        <div>
            <Title title={'Notes'}/>
            <p>25 notes</p>
            <div style={{ marginTop: 100 }}>
                <Note title={'And those who were seen dancing, were thought to be crazy, by those who could not hear the music.'} text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}/>
                <Note title={'And those who were seen dancing, were thought to be crazy, by those who could not hear the music.'} text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}/>
                <Note title={'And those who were seen dancing, were thought to be crazy, by those who could not hear the music.'} text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}/>
                <Note title={'And those who were seen dancing, were thought to be crazy, by those who could not hear the music.'} text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}/>
                <Note title={'And those who were seen dancing, were thought to be crazy, by those who could not hear the music.'} text={'A classic example of a big mouth and pretty words that lead me to glorify gross oversimplifications. Yes, one might be misunderstood by others who cannot appreciate their perspective. Everyone hears a different music... the allure of perspectivism gets me everytime. It can justify almost everything.'}/>
            </div>
        </div>
    );
}
export default Notes;