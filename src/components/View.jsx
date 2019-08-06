import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/Main';
import { ButtonMain } from '../styles/Button';
import InfoBlock from './InfoBlock';
import { RepoInfo, identicalItems } from './Data';

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

/**
 * View with button firing loadData function with specified id
 *
 * @property {function} loadData - loads information about more repositories
 * @property {string} id - id of this View
 * @property {array} data - information about all repositories
 * @property {array} saved - information about repositories which has been saved
 * @property {function} save - saves repository
 * @returns {ViewId}
 */
export function ViewId(props) {
  const { loadData, id } = props;
  const load = useCallback(() => loadData(id), [loadData, id]);
  return <ViewSingle {...props} loadData={load} />;
}

ViewId.propTypes = {
  loadData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
