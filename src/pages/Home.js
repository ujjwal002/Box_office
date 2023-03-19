/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery, useWhyDidYouUpdate } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchInput,
  SearchButtonWrapper,
} from './Home.styled';

const renderResults = (results) => {
  if (results && results.length === 0) {
    return <div style={{ textAlign: 'center' }}>No Results</div>;
  }
  
  if (results && results.length > 0) {
    return results[0].show ? (
      <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
        );
      }
      
      return null;
    };
 

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsearch = searchOption === 'shows';

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men

    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
      // eslint-disable-next-line
      // console.log(result);
    });
  };

  const onInputChange = useCallback(
    ev => {
      setInput(ev.target.value);
    },
    [setInput]
    );
    
    const onKeyDown = ev => {
      if (ev.keyCode === 13) onSearch();
    };
    
    const onRadioChange = useCallback(ev => {
      setSearchOption(ev.target.value);
    }, []);
    
    // eslint-disable-next-line
    // console.log(searchOption);
    
       
    //    useWhyDidYouUpdate('home',{ onInputChange,onKeyDown });

        return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
