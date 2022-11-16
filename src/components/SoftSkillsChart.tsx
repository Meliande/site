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

  const softSkills = ['GIT','Github','Linux','REST','Terminal']
  const SKillValues = [8,8,9,7,9]

  const data = {
    labels: softSkills,
    datasets: [
      {
        label: 'MiscSkills',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#10b981',
        fill: true,
      },
    ]
  };

export default function MiscSkillsChart(){

  return (
      <Radar data={data}/>
  )

}

