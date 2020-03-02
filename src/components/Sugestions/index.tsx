import React from 'react';

import SugestionList from './styles';

type Props = {
  sugestions: [],
  sugestionSelected(word: string): void
}

const Sugestions = (props: Props) => {
  const { sugestions } = props;

  const sugestionSelected = (word: string) => {
    const { sugestionSelected } = props;

    console.log(word);

    sugestionSelected(word);
  } 
  
  return (
    <SugestionList>
      { sugestions.map((sugestion: string) => (
        <li 
          key={ sugestion.toString() }
          onClick={() => sugestionSelected(sugestion)}
          >{ sugestion }</li>)
      )}
    </SugestionList>
  )
};

export default Sugestions;
