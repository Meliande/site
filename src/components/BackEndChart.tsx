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

  const SkillList = ['NextJS','NoSQL','Node','Prisma','SQL']
  const SKillValues = [8,7,8,8,9]

  const data = {
    labels: SkillList,
    datasets: [
      {
        label: 'BackEnd',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#ec4899',
        fill: true,

      },
    ],
  };

  const options = {

  }

export default function BackEndChart(){

  return (
      <Radar data={data}/>
  )

}

