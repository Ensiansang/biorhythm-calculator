import dayjs from 'dayjs';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';
import { calculateBiorhythms } from '../calculations';
import Biorhythmchart from './Biorhythmchart';
import './BiorhythmCard.css';
function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
}

function BiorhythmCard({ birthDate, targetDate }) {
    const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
    return (
            <IonCard className="biorhythm-card ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>{ formatDate(targetDate) }</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                       <Biorhythmchart birthDate={birthDate} targetDate={targetDate} />
                        <p className="physical">Physical: {physical.toFixed(4)}</p>
                        <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
                        <p className="intellectual">Intellectual: {intellectual.toFixed(4)} </p>
                    </IonCardContent>

            </IonCard>
    );

}
export default BiorhythmCard;