import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/Main';
import { ButtonMain } from '../styles/Button';
import InfoBlock from './InfoBlock';
import { identicalItems } from './Data';
import RepoInfo from './RepoInfo';

/**
 * @module View
 */

/**
 * Displays information about repositories from provided data
 *
 * @property {array} data - information about all repositories
 * @property {array} saved - information about repositories which has been saved
 * @property {function} save - saves repository
 * @returns {View}
 */
export default function View({ data, saved, save }) {
  return (
    <Content>
      {data.map(node => {
        const saving = saved.findIndex(item => identicalItems(item, node)) > -1;
        return <InfoBlock key={node.nameWithOwner} info={node} save={save} saved={saving} />;
      })}
    </Content>
  );
}

View.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};

/**
 * View with button firing loadData function
 *
 * @property {function} loadData - loads information about more repositories
 * @property {array} data - information about all repositories
 * @property {array} saved - information about repositories which has been saved
 * @property {function} save - saves repository
 * @returns {ViewSingle}
 */
export function ViewSingle(props) {
  const { data, loadData } = props;

  return (
    <>
      <View {...props} />
      <footer>
        <ButtonMain visible={data.length > 0} onClick={loadData}>
          Show more
        </ButtonMain>
      </footer>
    </>
  );
}

ViewSingle.propTypes = {
  loadData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
