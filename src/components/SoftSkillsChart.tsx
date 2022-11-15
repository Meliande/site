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
  const SKillValues = [10,9,8,7,6]

  const data = {
    labels: softSkills,
    datasets: [
      {
        label: 'SoftSkills',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#FAD4D8',
      },
    ]
  };

export default function SoftSkillsChart(){

  return (
      <Radar data={data}/>
  )

}

