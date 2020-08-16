import React, { useState, useEffect, useRef, useLayoutEffect} from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { checkIfNull } from 'shared/utility'
import * as actions from 'store/actions/index'
import './Search.scss'

const Search = React.memo(props => {
    const [searchQuery, setSearchQuery] = useState('')
    const inputRef = useRef();
    const history = useHistory();
    const firstLoadRef = useRef(true)

    useLayoutEffect(() => {
        if(firstLoadRef.current) {
            firstLoadRef.current = false
            return
        }
        const timer = setTimeout(() => {
            if(searchQuery === inputRef.current.value) {
                props.onSetSearchQuery(searchQuery)
            }
        }, 100);
        return() => {
            clearTimeout(timer)
        }
    }, [searchQuery, inputRef])

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) { 
            redirect()
        }
    }

    const redirect = () => {    
        if(checkIfNull(searchQuery)) {
            history.push({
                pathname: '/result',
                search: `?q=${props.query}`})
            props.onFetchProducts(props.query)
        }
    }

    return (
        <div className="search">
            <div className="search__div">
                <input className="search__input"
                    value={searchQuery}
                    ref={inputRef}
                    type="text"
                    onKeyDown={keyDownHandler}
                    onChange={event=>setSearchQuery(event.target.value)}/>
                <button className="search__submit" 
                    onClick={redirect}>SEARCH</button>
            </div>
        </div>
    );
});

const mapStateToProps = state => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading,
        query: state.products.query
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: (query) => dispatch(actions.fetchProducts(query)),
        onSetSearchQuery: (query) => dispatch(actions.setSearchQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);