import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/main';
import { ButtonMain } from '../styles/button';
import InfoBlock from './infoblock';
import { RepoInfo } from './data';

export default function View({ data, saved, save }) {
  return (
    <Content>
      {data.map((node, id) => {
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

export class ViewId extends Component {
  loadData = () => {
    const { loadData, id } = this.props;
    loadData(id);
  };

  render() {
    const { props, loadData } = this;
    return <ViewSingle {...props} loadData={loadData} />;
  }
}

ViewId.propTypes = {
  loadData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
