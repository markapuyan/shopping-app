import React, { useEffect } from 'react';
import './Result.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import ResultList from 'components/ItemsList/ItemsList'
import ResultSetting from 'components/Search/Setting/Setting'

const Result = React.memo((props) => {
    return (
        <Auxilliary>
            <div className="result__main">
                {/* <ResultSetting/> */}
                <ResultList />
            </div>
        </Auxilliary>
    );
});



export default Result;