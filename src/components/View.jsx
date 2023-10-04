import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/Main';
import { ButtonMain } from '../styles/Button';
import InfoBlock from './InfoBlock';
import { identicalItems } from './Data';
import RepoInfo from './RepoInfo';
import { ImgLoader } from '../styles/Img';
import { PFlex } from '../styles/Paragraph';
import LoadingSpinner from '../assets/img/loading-spinner.svg';
import { load } from './Fetch';

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
      {data.map((node) => {
        const saving = saved.findIndex((item) => identicalItems(item, node)) > -1;
        return <InfoBlock key={node.nameWithOwner} info={node} save={save} saved={saving} />;
      })}
    </Content>
  );
}

View.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
};

/**
 * View with button firing loadData function
 *
 * @property {function} loadData - loads information about more repositories
 * @property {string} loading - state of loading information
 * @property {array} data - information about all repositories
 * @property {array} saved - information about repositories which has been saved
 * @property {function} save - saves repository
 * @returns {ViewSingle}
 */
export function ViewSingle(props) {
  const { data, loadData, loading } = props;

  const content = useMemo(() => {
    switch (loading) {
      case load.INPROGRESS:
        return <ImgLoader src={LoadingSpinner} alt="Loading items" />;
      case load.LOADED:
        return (
          <ButtonMain $visible={data.length > 0} onClick={loadData}>
            Show more
          </ButtonMain>
        );
      case load.ERORR:
        return (
          <PFlex>
            Something went wrong during loading repositories. Please try to refresh the website.
          </PFlex>
        );
      default:
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>;
    }
  }, [loading, data, loadData]);

  return (
    <>
      <View {...props} />
      <footer>{content}</footer>
    </>
  );
}

ViewSingle.propTypes = {
  loadData: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
};
