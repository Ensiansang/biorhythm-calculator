import dayjs from "dayjs";
function calculateBiorhythm(birthDate,targetDate, cycle){
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'days');
    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(birthDate, targetDate) {
    return {
        Physical: calculateBiorhythm(birthDate, targetDate, 23),
        Emotional: calculateBiorhythm(birthDate, targetDate, 28),
        Intellectual: calculateBiorhythm(birthDate, targetDate, 33),
    };
}