import React, { useState } from 'react';
import API from './API';
import './lesson_3';
import {log} from 'util';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(response => {
    //             console.log(response)
    //             if(response.data.Response === 'True'){
    //                 setSerachResult(JSON.stringify(response.data.Search))
    //             } else {
    //                 setSerachResult(response.data.Error)
    //             }
    //         })
    //         .catch(err => {
    //             console.log()
    //         })
    // };

    let data = {}

    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName)
            const {Response, Search, Error, totalResults} = data
            if(Response === 'True') {
                setSerachResult(JSON.stringify(Search))
            } else {
                setSerachResult(Error)
            }
        } catch (err) {
            console.log('err', err)
        }
    };


    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promfdsfdsfises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;