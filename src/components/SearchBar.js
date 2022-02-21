import React, { useState } from 'react';

// Stephen's refactor: clean af!

const SearchBar = ({ onFormSubmit }) => {
   const [term, setTerm] = useState('');

   // When the form is submitted, run the passed in oFS func with the search term
   //.. ie. pass this term back to the App comp
   const onSubmit = event => {
      event.preventDefault();
      onFormSubmit(term);
   };

   return (
      <div className="searchbar ui segment">
         <form onSubmit={onSubmit} className="ui form">
            <div className="field">
               <label>Search for a Video</label>
               <input
                  type="text"
                  value={term}
                  onChange={e => {
                     setTerm(e.target.value);
                  }}
               />
            </div>
         </form>
      </div>
   );
};

export default SearchBar;
