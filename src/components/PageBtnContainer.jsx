import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const PageBtnContainer = () => {

  const {numOfPages , page} = useSelector((store) => store.allJobs);
  const dispatch = useDispatch()

  const pages = Array.from({length : numOfPages}, (_,index) => {
    return index + 1;
  })

  const nextPage = () => {}

  const prevPage = () => {}


  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        Prev
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">
        {
          pages.map((pageNumber) => {
            return(
              <button type='button' className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                key={pageNumber} onClick={() => console.log('change page')}>
                {pageNumber}
              </button>
            )
          })
        }
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper> 
  )
}

export default PageBtnContainer