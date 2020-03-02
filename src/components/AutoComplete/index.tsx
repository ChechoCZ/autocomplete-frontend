import React, { Component, Fragment } from 'react';

import api from '../../services/api';

import Sugestions from '../Sugestions';
import Container from './styles';

export default class AutoComplete extends Component {
  state = {
    text: '',
    sugestions: [] as any,
    showSugestions: false
  }

  searchSuggestions = async (e: any) => {
    const word = e.target.value;

    this.setState({
      text: word,
      showSugestions: false
    });

    if (word.length > 0) {
      const { data } = await api.get(`/search?word=${word}`);

      this.setState({
        sugestions: data,
        showSugestions: true
      });
    }
  }

  sugestionSelected = (word: string) => {
    this.setState({
      text: word,
      sugestions: []
    });
  }

  render() {
    const { text, sugestions, showSugestions } = this.state;

    return (
      <Fragment>
        <Container>
          <input 
            type="text" 
            value={text} 
            onChange={this.searchSuggestions.bind(this)} 
            placeholder="Search U.S states..."/>
        </Container>
        { showSugestions ? <Sugestions sugestions={sugestions} sugestionSelected={(word: string) => this.sugestionSelected(word)} /> : '' }
      </Fragment>
    );
  }
}
