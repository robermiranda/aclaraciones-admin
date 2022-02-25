import Statistics from './Statistics'
import { getAclaracionesCurrentYear,
    getAclaracionesCurrentMonth,
    getAclaracionesToday } from "./data";
    import Layout from '../Layout';

export default function Index () {
    return (
        <Layout>
            <Statistics
                year={getAclaracionesCurrentYear()}
                month={getAclaracionesCurrentMonth()}
                today={getAclaracionesToday()} />
        </Layout>
    )
}
