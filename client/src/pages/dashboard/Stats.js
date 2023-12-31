import { useEffect } from "react";
import { StatsContainer , Loading, ChartsContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const Stats = ()=>{
    const { showStats, isLoading, monthlyApplication } = useAppContext();
    useEffect(()=>{
        showStats();
        // eslint-disable-next-line
    }, []);
    if(isLoading){
        return <Loading center />
    }

    return (
        <div>
            <StatsContainer />
            {monthlyApplication.length > 0 && <ChartsContainer /> }
        </div>
    );
}
export default Stats;