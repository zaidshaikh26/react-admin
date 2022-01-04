import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 3000,
        },
        {
            name: 'Mar',
            "Active User": 2000,
        },
        {
            name: 'Apr',
            "Active User": 1000,
        },
      ];

    return (
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
