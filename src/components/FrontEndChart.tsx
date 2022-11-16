import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
);

import { Radar } from 'react-chartjs-2';

  const fronSkills = ['CSS','HTML','JavaScript','React','ReactNative','SASS','TailwindCSS']
  const SKillValues = [8,9,9,8,7,8,9]

  const data = {
    labels: fronSkills,
    datasets: [
      {
        label: 'FrontEnd',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#64748b',
        fill: true,
      },
    ], 
  };

export default function FrontEndChart(){

  return (
      <Radar data={data}/>
  )

}

