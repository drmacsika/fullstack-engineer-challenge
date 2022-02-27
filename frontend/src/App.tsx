import "./index.css";
import PolicyTable from "./components/PolicyTable";
import { useQuery } from '@apollo/client';
import { POLICY } from './api/queries';

const App = () => {
    const { loading, error, data } = useQuery(POLICY);
    if (loading) return <>"Loading..."</>;
    if (error) return <>`Error! ${error.message}`</>;
    console.log(JSON.stringify(data));
    return (
        <>
          <div className="container mx-auto px-8 overflow-hidden py-8 pb-20">
            <h1 className="text-3xl text-center py-2 pt-8">Insurance Policies</h1>
              <PolicyTable policies={ data?.policies } />
          </div>
        </>
    )
}

export default App;
