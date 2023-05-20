import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchRequests} from "../../reducers/supportSlice";
import SupportList from "../../components/support/SupportList";
import MakeRequest from "../../components/support/MakeRequest";

function Support(props) {
    const support = useSelector(state => state.support)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRequests())
    }, [dispatch])

    return (
    <main className="main">
        <div className="support">
            <MakeRequest/>
            <h2 className="support__title">Мои запросы</h2>
            <SupportList requests={support.requests}/>
        </div>
    </main>
    );
}

export default Support;