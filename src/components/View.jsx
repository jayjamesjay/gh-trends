import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/Main';
import { ButtonMain } from '../styles/Button';
import InfoBlock from './InfoBlock';
import { RepoInfo } from './Data';

// Group of InfoBlocks wrapped in Content
export default function View({ data, saved, save }) {
  return (
    <Content>
      {data.map(node => {
        const saving = saved.findIndex(item => item.nameWithOwner === node.nameWithOwner) > -1;
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

// View with button firing loadData function without any id
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

// View with button firing loadData function with specified id
export function ViewId(props) {
  const { loadData, id } = props;
  const load = () => loadData(id);
  return <ViewSingle {...props} loadData={load} />;
}

ViewId.propTypes = {
  loadData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
