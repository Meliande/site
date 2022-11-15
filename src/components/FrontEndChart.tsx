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
  const SKillValues = [10,9,8,7,6,5,4]

  const data = {
    labels: fronSkills,
    datasets: [
      {
        label: 'FrontEnd',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#B4CEB3',
      },
    ],
    
  };

export default function FrontEndChart(){

  return (
      <Radar data={data}/>
  )

}

