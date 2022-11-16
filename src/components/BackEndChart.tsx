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
  const SKillValues = [9,10,1,2,3]

  const data = {
    labels: SkillList,
    datasets: [
      {
        label: 'BackEnd',
        data: SKillValues,
        borderWidth: 3,
        backgroundColor: '#881337',
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

