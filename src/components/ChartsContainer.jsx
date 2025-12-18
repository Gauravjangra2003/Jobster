import AreaCharts from "./AreaCharts"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { useSelector } from "react-redux"


const ChartsContainer = () => {

  const {monthlyApplications : data} = useSelector((store) => store.allJobs)

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <h3>Stats Chart</h3>
      <AreaCharts data={data} />
    </Wrapper>
  )
}

export default ChartsContainer