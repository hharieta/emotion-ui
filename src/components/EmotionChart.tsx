// src/components/EmotionChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const EmotionChart = ({ data }: {data: any}) => {
  const emotionData = Object.keys(data.emotion.document.emotion).map(key => ({
    name: key,
    value: data.emotion.document.emotion[key],
  }));

  return (
    <Card>
      <CardHeader className='items-center'>
        <h2>Entites Emotions</h2>
      </CardHeader>
      <CardContent>
        <BarChart
          width={700}
          height={300}
          data={emotionData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="score" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default EmotionChart;
