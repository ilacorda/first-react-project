import {
  StyleSheet
}
from 'react-native';

export default StyleSheet.create({
  App: {
    textAlign: 'center'
  },
  'App-logo': {
    animation: 'App-logo-spin infinite 20s linear',
    height: [{
      unit: 'px',
      value: 80
    }]
  },
  'App-header': {
    backgroundColor: '#222',
    height: [{
      unit: 'px',
      value: 150
    }],
    padding: [{
      unit: 'px',
      value: 20
    }, {
      unit: 'px',
      value: 20
    }, {
      unit: 'px',
      value: 20
    }, {
      unit: 'px',
      value: 20
    }],
    color: 'white'
  },
  'App-title': {
    fontSize: [{
      unit: 'em',
      value: 1.5
    }]
  },
  'App-intro': {
    fontSize: [{
      unit: 'string',
      value: 'large'
    }]
  }
});
