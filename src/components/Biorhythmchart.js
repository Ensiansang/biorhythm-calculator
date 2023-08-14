import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, ReferenceLine, CartesianGrid } from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';
import dayjs from 'dayjs';
import './Biorhythmchart.css';


function formatDate(isoString) {
    return dayjs(isoString).format('D MMM');
}

function Biorhythmchart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
   const data = calculateBiorhythmSeries(birthDate, startDate, 31)
    .map((item) => ({ ...item, date: formatDate(item.date) }));
   //console.log({data});
    return (
        <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}> 
           <LineChart data={data}>
               <CartesianGrid vertical={false} strokeDasharray={"3  3"} />
               <XAxis dataKey="date" 
                    ticks={[data[3].date, data[15].date, data[27].date]}
               />
               <ReferenceLine x={data[15].date} />
               <Line type="natural" dot={false} dataKey="physical" className="physical" />
               <Line type="natural" dot={false} dataKey="emotional" className="emotional" />
               <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
               </LineChart> 
        </ResponsiveContainer>
 
    );
}

export default Biorhythmchart;