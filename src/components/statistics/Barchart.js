import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { COLORS as C } from './util';

export default function Barchart ({data, layout}) {
    if (layout === undefined || layout === 'horizontal') return (
        <>
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NA" stackId="a" fill={C.nacimiento} />
                <Bar dataKey="MA" stackId="a" fill={C.matrimonio} />
                <Bar dataKey="DE" stackId="a" fill={C.defuncion} />
            </BarChart>
        </>
    );
    else if (layout === 'vertical') return (
        <>
            <BarChart
                width={700}
                height={900}
                data={data}
                layout={layout}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number"/>
                <YAxis type="category" dataKey="name"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="NA" stackId="a" fill={C.nacimiento} />
                <Bar dataKey="MA" stackId="a" fill={C.matrimonio} />
                <Bar dataKey="DE" stackId="a" fill={C.defuncion} />
            </BarChart>
        </>
    );
    else return null;
}
