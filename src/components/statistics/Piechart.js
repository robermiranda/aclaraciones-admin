import { PieChart, Pie, Legend, Cell } from 'recharts';
import { COLORS as C } from './util';


export default function Piechart ({data}) {

    const COLORS = [C.nacimiento, C.matrimonio, C.defuncion];
    
    return (
        <>
            <PieChart width={400} height={400}>
                <Legend />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="count"
                    label>

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
        </PieChart>
        </>
    );
}