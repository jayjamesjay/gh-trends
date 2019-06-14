import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../styles/main';
import { ButtonMain } from '../styles/button';
import InfoBlock from './infoblock';

export default function View(props) {
  const { data, saved, save } = props;
  return (
    <Content>
      {data.map((node, id) => {
        const saving = saved.findIndex(item => item.nameWithOwner === node.nameWithOwner) > -1;
        return <InfoBlock key={node.nameWithOwner + id} info={node} save={save} saved={saving} />;
      })}
    </Content>
  );
}

View.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
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
  data: PropTypes.array.isRequired
};

export class ViewId extends Component {
  loadData = () => {
    const { loadData, id } = this.props;
    loadData(id);
  };

  render() {
    const { loadData } = this;
    return <ViewSingle loadData={loadData} {...this.props} />;
  }
}

ViewId.propTypes = {
  loadData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
