import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import osamaConfig from '../assets/config/osama-config.json';

const ArgonExtra = require('../assets/fonts/argon.ttf');


const IconArgonExtra = createIconSetFromIcoMoon(osamaConfig, 'ArgonExtra');

class IconS extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({ ArgonExtra: ArgonExtra });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    if (name && family && this.state.fontLoaded) {
      if (family === 'ArgonExtra') {
        return <IconArgonExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}
export default IconS ;
